import axiosClient from "../configs/axios";
import omdbBadSearchInterface from "../interfaces/ombdBadSearchInterface";
import omdbSucessfulSearchInterface from "../interfaces/omdbSucessfulSearchInterface";
import omdbFilmInterface from "../interfaces/omdbFilmInterface";

const omdbService = {
  getId: async (name: string) => {
    const { data } = await axiosClient.get<omdbBadSearchInterface | omdbSucessfulSearchInterface>('', {
      params: {
        s: name,
        apikey: process.env.OMDB_API_KEY
      }
    })

    if (data.Response === "False"){
      return null
    }

    // Pega o primeiro retorno da API pois deve ser o filme desejado, o ideal seria fazer algum tipo de válidação (talvez)
    // TODO: Verficar se é uma boa abordagem
    return data.Search[0].imdbID;
  },

  getDetails: async (id: string) => {
    const { data } = await axiosClient.get<omdbFilmInterface>('', {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY
      }
    })

    return data;
  }
}

export default omdbService;