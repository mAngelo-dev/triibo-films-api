import { Request, Response } from "express";
import filmsService from "../services/filmsService";
import FilmDTO from "../interfaces/filmDTO";

const filmsController = {
  getAllFilms: async (_req: Request, res: Response) => {
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
  },

  createFilm: async (req: Request, res: Response) => {
    const filmData: FilmDTO = req.body;
    try {
      const newFilmId = await filmsService.createFilm(filmData);
      return res.status(201).json({
        message: 'Filme criado com sucesso.',
        filmId: newFilmId,
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Algo deu errado ao criar o filme.',
      });
    }
  },

  deleteFilm: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await filmsService.deleteFilmById(id);
      return res.status(200).json({
        message: 'Filme deletado com sucesso.',
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Algo deu errado ao deletar o filme.',
      });
    }
  },

  updateFilm: async (req: Request, res: Response) => {
    const { id } = req.params;
    const filmData: Partial<FilmDTO> = req.body;
    try {
      await filmsService.updateFilmById(id, filmData);
      return res.status(200).json({
        message: 'Filme atualizado com sucesso.',
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Algo deu errado ao atualizar o filme.',
      });
    }
  }
};

export default filmsController;