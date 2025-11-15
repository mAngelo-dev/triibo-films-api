import filmsRepository from "../repositories/filmsRepository";
import FilmInterface from "../interfaces/filmInterface";
import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;
import filmDataInterface from "../interfaces/filmDataInterface";

const filmsService = {
  getAllFilms: async (): Promise<filmDataInterface[]> => {
    return await filmsRepository.getAllFilms();
  },

  getFilmById: async (id: string): Promise<FilmInterface|null> => {
    return await filmsRepository.getFilmById(id);
  },

  createFilm: async ({ title, year, description }: FilmInterface): Promise<string> => {
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

  updateFilmById: async (id: string, film: Partial<FilmInterface>) => {
    const { title, year, description } = film

    return filmsRepository.updateFilmById(id, {
      title,
      year,
      description,
      updatedAt: Timestamp.now(),
    });
  }
}

export default filmsService;