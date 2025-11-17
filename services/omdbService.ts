import axiosClient from "../configs/axios";
import omdbBadSearchInterface from "../interfaces/ombdBadSearchInterface";
import omdbSucessfulSearchInterface from "../interfaces/omdbSucessfulSearchInterface";

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

    return data.Search[0].imdbID
  },
}

export default omdbService;