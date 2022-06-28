import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import moviesReducer from "./movies"

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
  },
})
