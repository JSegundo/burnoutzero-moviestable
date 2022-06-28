import axios from "axios"
import getUniqueItems from "../utils/getUniqueItems"
import { LangInterface } from "../interfaces"
const APIURL =
  "https://api.themoviedb.org/3/configuration/languages?api_key=d023cfe53943d6e26b3d31eb89dad6e6"

export async function getAvailableLanguagesService(): Promise<
  LangInterface[] | void
> {
  try {
    let languajes = await axios.get(APIURL)
    return getUniqueItems(languajes.data, "english_name") // se filtra la respuesta porque la api retorna elementos repetidos que causan warnings.
  } catch (err) {
    console.error(err.message)
  }
}
