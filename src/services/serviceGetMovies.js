import axios from "axios"
import itCanFail from "../utils/itCanFail"
const APIURL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d023cfe53943d6e26b3d31eb89dad6e6"

export async function getAllMoviesService(langCode) {
  try {
    //itCanFail()
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
} // probar con PromiseAll..

// capaz es mejor separar el filtro del pedido. porque estoy pidiendo las 100 en cada cambio del input.. aunque solo haya 2 para mostrar o 0.

// queda ver manejo de errores y estado de loading...
