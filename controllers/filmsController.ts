import { Request, Response } from "express";
import filmsService from "../services/filmsService";

const filmsController = {
  getAllFilms: async (req: Request, res: Response) => {
    try {
      const films = await filmsService.getAllFilms();
      return res.status(200).json(films);
    } catch (error) {
      return res.status(500).json({
        message: 'Algo deu errado ao buscar os filmes.',
      });
    }
  }
};

export default filmsController;
