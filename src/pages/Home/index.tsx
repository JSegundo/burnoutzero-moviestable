import React, { useEffect, useState } from "react"
import { DataTable } from "../../components/Table"
import { Container } from "@mui/material"

import { Dispatch } from "redux"

import { useDispatch, useSelector } from "react-redux"
import { getAllMovies } from "../../redux/movies"
import { SelectLanguaje } from "../../components/inputLanguaje"
import { Loading } from "../../components/Loading"
import { ErrorAlert } from "../../components/ErrorAlert"
import { getAvailableLanguagesService } from "../../services/languagesServices"

import { LangInterface } from "../../interfaces"

export const Home = () => {
  const dispatch = useDispatch<Dispatch<any>>()

  let { data, error, loading } = useSelector((state: any) => state.movies)

  const [langCode, setLangCode] = useState<string | null>(null)
  const [allLangs, setAllLangs] = useState<LangInterface[] | void>()

  useEffect(() => {
    dispatch(getAllMovies(langCode))
  }, [langCode, dispatch])

  useEffect(() => {
    async function getlangs() {
      const langs = await getAvailableLanguagesService()
      setAllLangs(langs)
    }
    getlangs()
  }, [])

  return (
    <>
      {loading && <Loading />}
      {error ? <ErrorAlert errormessage={error} /> : null}
      <Container>
        <SelectLanguaje setLangCode={setLangCode} allLanguages={allLangs} />
        <DataTable movies={data} />
      </Container>
    </>
  )
}
