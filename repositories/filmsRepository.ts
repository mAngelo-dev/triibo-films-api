import {db} from "../configs/firebase";
import filmInterface from "../interfaces/filmInterface";
import filmDataInterface from "../interfaces/filmDataInterface";

const filmsRepository = {
  getAllFilms: async () => {
    const snapshot = await db.collection("films").get();
    const films: Array<filmDataInterface> = [];

    for (const doc of snapshot.docs) {
      films.push({id: doc.id, data: doc.data() as filmInterface});
    }
    return films;
  },

  getFilmById: async (id: string) => {
    const doc = await db.collection("films").doc(id).get();
    if (doc.exists){
      return doc.data() as filmInterface;
    }
    return null;
  },

  createFilm: async (film: filmInterface) => {
    const docRef = await db.collection("films").add(film);
    return docRef.id;
  },
  deleteFilmById(id: string) {
    return db.collection("films").doc(id).delete();
  },

  updateFilmById(id: string, film: Partial<filmInterface>) {
    return db.collection("films").doc(id).update(film);
  }
}
export default filmsRepository;