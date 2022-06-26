import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import moviesReducer from "./movies"
import languagesReducer from "./languages"
// import selectedLanguageReducer from "./languages/selectedLanguaje"

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    languages: languagesReducer,
    // selectedLang: selectedLanguageReducer,
  },
})
