import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"
import { getAllMoviesService } from "../../services/serviceGetMovies"

export const getAllMovies = createAsyncThunk("getmovies", getAllMoviesService)

const moviesReducer = createReducer([], {
  [getAllMovies.fulfilled]: (state, action) => action.payload,
})

export default moviesReducer
