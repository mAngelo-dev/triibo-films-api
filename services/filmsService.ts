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