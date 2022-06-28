import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getAllMoviesService } from "../../services/serviceGetMovies"
import { stateInterface, movieInterface } from "../../interfaces"
import type { PayloadAction } from "@reduxjs/toolkit"

export const getAllMovies = createAsyncThunk("getmovies", getAllMoviesService)

let initialState: stateInterface = {
  loading: false,
  error: null,
  data: [],
}

const moviesReducer = createSlice({
  name: "movies",
  initialState,
  reducers: {
    [getAllMovies.pending.toString()]: (state: stateInterface, action: any) => {
      state.loading = true
    },
    [getAllMovies.fulfilled.toString()]: (
      state: stateInterface,
      action: PayloadAction<movieInterface[]>
    ) => {
      console.log("ASDASDADASD", action.payload)
      state.loading = false
      state.data = action.payload
    },
    [getAllMovies.rejected.toString()]: (
      state: stateInterface,
      action: any
    ) => {
      state.loading = false
      state.error = action.error.message
    },
  },
})

export default moviesReducer.reducer
