import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { useSelector } from "react-redux"

export const SelectLanguaje = ({ langCode, setLangCode }) => {
  const allLanguages = useSelector((state) => state.languages)

  const handleChange = (event, newlang) => {
    setLangCode(newlang?.iso_639_1 ? newlang.iso_639_1 : null)
  }

  return (
    <>
      {allLanguages && (
        <Autocomplete
          getOptionLabel={(option) => option.english_name}
          disablePortal
          options={allLanguages}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Languages" />}
          onChange={(event, newlang) => handleChange(event, newlang)}
        />
      )}
    </>
  )
}
