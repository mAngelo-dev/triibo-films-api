import filmsRepository from "../repositories/filmsRepository";
import FilmDTO from "../interfaces/filmDTO";
import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;
import FilmData from "../interfaces/filmData";

const filmsService = {
  getAllFilms: async (): Promise<FilmData[]> => {
    return await filmsRepository.getAllFilms();
  },

  getFilmById: async (id: string): Promise<FilmDTO|null> => {
    return await filmsRepository.getFilmById(id);
  },

  createFilm: async ({ title, year, description }: FilmDTO): Promise<string> => {
    const filmToBeCreated = {
      title,
      year,
      description,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    }
    return await filmsRepository.createFilm(filmToBeCreated);
  },

  deleteFilmById: async (id: string) => {
    return await filmsRepository.deleteFilmById(id);
  },

  updateFilmById: async (id: string, film: Partial<FilmDTO>) => {
    const allowedFields: Array<string> = ['title', 'year', 'description'];

    let sanitizedFilm = {};

    for (const key of Object.keys(film)) {
      if (allowedFields.includes(key)) {
        // Avaliar alguma forma de evitar o ts-ignore aqui, por mais que funcione, esta havendo erro com a tipagem.
        // @ts-ignore
        sanitizedFilm[key] = film[key];
      }
    }

    return filmsRepository.updateFilmById(id, {
      ...sanitizedFilm,
      updatedAt: Timestamp.now(),
    });
  }
}

export default filmsService;