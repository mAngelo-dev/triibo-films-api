import filmsRepository from "../repositories/filmsRepository";

const filmsService = {
  getAllFilms: async () => {
    return await filmsRepository.getAllFilms();
  }
}

export default filmsService;