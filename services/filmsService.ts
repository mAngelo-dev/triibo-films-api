import filmsRepository from "../repositories/filmsRepository";
import filmInterface from "../interfaces/filmInterface";
import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;
import filmDataInterface from "../interfaces/filmDataInterface";
import omdbService from "./omdbService";
import filmWithImdbInterface from "../interfaces/filmWithImdbInterface";

const filmsService = {
  getAllFilms: async (): Promise<filmDataInterface[]> => {
    return await filmsRepository.getAllFilms();
  },

  getFilmById: async (id: string): Promise<filmInterface|null|filmWithImdbInterface> => {
    const film = await filmsRepository.getFilmById(id);
    if (!film){
      return null
    }
   if (film.imdbID === null || film.imdbID === undefined){
     return film
   }
   const details = await omdbService.getDetails(film.imdbID)
    return {...film, details}
  },

  createFilm: async ({ title, year, description }: filmInterface): Promise<string> => {
    const filmToBeCreated = {
      title,
      year,
      description,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      imdbID: await omdbService.getId(title)
    }
    return await filmsRepository.createFilm(filmToBeCreated);
  },

  deleteFilmById: async (id: string) => {
    return await filmsRepository.deleteFilmById(id);
  },

  updateFilmById: async (id: string, film: Partial<filmInterface>) => {
    const { title, year, description } = film;
    let newID: string | null = null;

    if (title) {
      newID = await omdbService.getId(title);
    }

    // Valor truthy seguido de spread
    const updatedFilm: Partial<filmInterface> = {
      ...(title && { title }),
      ...(year && { year }),
      ...(description && { description }),
      ...(newID && { imdbID: newID }),
      updatedAt: Timestamp.now(),
    };

    return filmsRepository.updateFilmById(id, updatedFilm);
  }
}

export default filmsService;