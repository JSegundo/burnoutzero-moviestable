import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"
import { getAvailableLanguagesService } from "../../services/languagesServices"

export const getAvailableLanguages = createAsyncThunk(
  "getAllLanguajes",
  getAvailableLanguagesService
)

const languagesReducer = createReducer([], {
  [getAvailableLanguages.fulfilled]: (state, action) => action.payload,
})

export default languagesReducer
