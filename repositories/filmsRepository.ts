import {db} from "../configs/firebase";
import Film from "../interfaces/filmInterface";
import FilmDataInterface from "../interfaces/filmDataInterface";

const filmsRepository = {
  getAllFilms: async () => {
    const snapshot = await db.collection("films").get();
    const films: Array<FilmDataInterface> = [];

    for (const doc of snapshot.docs) {
      films.push({id: doc.id, data: doc.data() as Film});
    }
    return films;
  },

  getFilmById: async (id: string) => {
    const doc = await db.collection("films").doc(id).get();
    if (doc.exists){
      return doc.data() as Film;
    }
    return null;
  }
}
export default filmsRepository;