import {db} from "../configs/firebase";

const filmsRepository = {
  getAllFilms: async () => {
    const snapshot = await db.collection("films").get();
    const films = [];

    for (const doc of snapshot.docs) {
      films.push(doc.data());
    }
    return films;
  }
}
export default filmsRepository;