import { Request, Response } from "express";
import filmsService from "../services/filmsService";
import filmDataInterface from "../interfaces/filmDataInterface";

const filmsController = {
  getAllFilms: async (req: Request, res: Response) => {
    try {
      const films = await filmsService.getAllFilms();
      if (films.length === 0) {
        return res.status(404).json({
          message: 'Nenhum filme encontrado.',
        });
      }
      return res.status(200).json(films);
    } catch (error) {
      return res.status(500).json({
        message: 'Algo deu errado ao buscar os filmes.',
      });
    }
  },

  getFilmById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const film = await filmsService.getFilmById(id);
      if (!film) {
        return res.status(404).json({
          message: 'Filme não encontrado.',
        });
      }
      return res.status(200).json(film);
  } catch (error) {
      return res.status(500).json({
        message: 'Algo deu errado ao buscar o filme.',
      });
    }
  }
};

export default filmsController;