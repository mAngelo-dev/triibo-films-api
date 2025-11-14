import {db} from "../configs/firebase";
import FilmDTO from "../interfaces/filmDTO";
import FilmData from "../interfaces/filmData";

const filmsRepository = {
  getAllFilms: async () => {
    const snapshot = await db.collection("films").get();
    const films: Array<FilmData> = [];

    for (const doc of snapshot.docs) {
      films.push({id: doc.id, data: doc.data() as FilmDTO});
    }
    return films;
  },

  getFilmById: async (id: string) => {
    const doc = await db.collection("films").doc(id).get();
    if (doc.exists){
      return doc.data() as FilmDTO;
    }
    return null;
  },

  createFilm: async (film: FilmDTO) => {
    const docRef = await db.collection("films").add(film);
    return docRef.id;
  },
  deleteFilmById(id: string) {
    return db.collection("films").doc(id).delete();
  }
}
export default filmsRepository;