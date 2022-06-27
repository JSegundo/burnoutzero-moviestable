import axios from "axios"
import itCanFail from "../utils/itCanFail"
const APIURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6"

export async function getAllMoviesService(langCode) {
  itCanFail()

  try {
    let totalmovies = []
    for (let i = 1; i <= 5; i++) {
      let response = await axios.get(`${APIURL}&language=en-US&page=${i}`)
      let movies = response.data.results
      movies.forEach((movie) => {
        totalmovies.push(movie)
      })
    }
    //
    let respuesta
    if (langCode === null) {
      respuesta = totalmovies
    } else {
      respuesta = totalmovies.filter(
        (mov) => mov.original_language === langCode
      )
    }

    return respuesta
  } catch (err) {
    console.error(err)
  }
}
