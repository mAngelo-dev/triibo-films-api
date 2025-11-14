import filmsRepository from "../repositories/filmsRepository";

const filmsService = {
  getAllFilms: async () => {
    return await filmsRepository.getAllFilms();
  },

  getFilmById: async (id: string) => {
    return await filmsRepository.getFilmById(id);
  }
}

export default filmsService;