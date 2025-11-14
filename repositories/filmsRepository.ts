const filmsRepository = {
  getAllFilms: async () => {
    return [
      { id: 1, title: 'Inception', director: 'Christopher Nolan' },
      { id: 2, title: 'The Matrix', director: 'The Wachowskis' },
      { id: 3, title: 'Interstellar', director: 'Christopher Nolan' }
    ]
  }
}
export default filmsRepository;