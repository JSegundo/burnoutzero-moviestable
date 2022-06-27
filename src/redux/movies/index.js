import { createReducer, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllMoviesService } from "../../services/serviceGetMovies"

export const getAllMovies = createAsyncThunk("getmovies", getAllMoviesService)

let initialState = {
  loading: false,
  error: null,
  data: [],
}

const moviesReducer = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [getAllMovies.pending]: (state, action) => {
      state.loading = true
    },
    [getAllMovies.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getAllMovies.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})

export default moviesReducer.reducer
