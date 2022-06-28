import React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { Box } from "@mui/material"
import { LangInterface } from "../../interfaces"

export const SelectLanguaje = ({ setLangCode, allLanguages }) => {
  const handleChange = (event, newlang) => {
    setLangCode(newlang?.iso_639_1 ? newlang.iso_639_1 : null)
  }

  return (
    <Box style={{ width: "50%", margin: "50px 0 0 auto" }}>
      {allLanguages && (
        <Autocomplete
          getOptionLabel={(option: LangInterface) => option.english_name}
          disablePortal
          options={allLanguages}
          renderInput={(params) => <TextField {...params} label="Languages" />}
          onChange={(event, newlang) => handleChange(event, newlang)}
        />
      )}
    </Box>
  )
}
