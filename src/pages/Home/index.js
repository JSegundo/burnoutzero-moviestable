import React, { useEffect, useState } from "react"
import "./home.scss"
import { DataTable } from "../../components/Table"
import { Container, Box } from "@material-ui/core"

import { useDispatch, useSelector } from "react-redux"
import { getAllMovies } from "../../redux/movies"
import { SelectLanguaje } from "../../components/inputLanguaje"
import { getAvailableLanguages } from "../../redux/languages"

export const Home = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies)
  const [langCode, setLangCode] = useState(null)

  useEffect(() => {
    dispatch(getAllMovies(langCode))
  }, [langCode, dispatch]) // en revisión

  useEffect(() => {
    dispatch(getAvailableLanguages())
  }, [dispatch])

  return (
    <>
      <Container>
        <Box style={{ width: "50%", margin: "50px 0 0 auto" }}>
          <SelectLanguaje langCode={langCode} setLangCode={setLangCode} />
        </Box>
        <DataTable movies={movies} />
      </Container>
    </>
  )
}
