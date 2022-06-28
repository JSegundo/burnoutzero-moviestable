import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "./movies"
import logger from "redux-logger"

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
  },
})
