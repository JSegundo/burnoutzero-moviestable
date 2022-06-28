import React, { useEffect, useState } from "react"
import { DataTable } from "../../components/Table"
import { Container } from "@mui/material"

import { useDispatch, useSelector } from "react-redux"
import { getAllMovies } from "../../redux/movies"
import { SelectLanguaje } from "../../components/inputLanguaje"
import { Loading } from "../../components/Loading"
import { ErrorAlert } from "../../components/ErrorAlert"
import { getAvailableLanguagesService } from "../../services/languagesServices"

export const Home = () => {
  const dispatch = useDispatch()

  let { data, error, loading } = useSelector((state) => state.movies)

  const [langCode, setLangCode] = useState(null)
  const [allLangs, setAllLangs] = useState(null)

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
      <Container>
        {error && <ErrorAlert errormessage={error} />}
        <SelectLanguaje setLangCode={setLangCode} allLanguages={allLangs} />
        <DataTable movies={data} />
      </Container>
    </>
  )
}
