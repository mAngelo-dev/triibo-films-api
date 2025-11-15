import {db} from "../configs/firebase";
import FilmInterface from "../interfaces/filmInterface";
import filmDataInterface from "../interfaces/filmDataInterface";

const filmsRepository = {
  getAllFilms: async () => {
    const snapshot = await db.collection("films").get();
    const films: Array<filmDataInterface> = [];

    for (const doc of snapshot.docs) {
      films.push({id: doc.id, data: doc.data() as FilmInterface});
    }
    return films;
  },

  getFilmById: async (id: string) => {
    const doc = await db.collection("films").doc(id).get();
    if (doc.exists){
      return doc.data() as FilmInterface;
    }
    return null;
  },

  createFilm: async (film: FilmInterface) => {
    const docRef = await db.collection("films").add(film);
    return docRef.id;
  },
  deleteFilmById(id: string) {
    return db.collection("films").doc(id).delete();
  },

  updateFilmById(id: string, film: Partial<FilmInterface>) {
    return db.collection("films").doc(id).update(film);
  }
}
export default filmsRepository;