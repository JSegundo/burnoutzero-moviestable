export interface LangInterface {
  english_name: string
  iso_639_1: string
  name: string
}

export interface stateInterface {
  loading: boolean
  error: null
  data: movieInterface[]
}

export interface sliceInterface {
  name: string
  initialState: stateInterface
  extraReducers: object
}

export interface movieInterface {
  adult: boolean
  backdrop_path: string
  genre_ids: Array<number>
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

// export interface ActionGetMovies {
//   type: "getmovies"
// }
