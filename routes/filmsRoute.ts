import express from "express";
import filmsController from "../controllers/filmsController";
import authMiddleware from "../middleware/authMiddleware";

const filmsRoute = express.Router();

filmsRoute.use(authMiddleware.auth)

/**
 * @openapi
 * /films:
 *   get:
 *     tags:
 *       - Filmes
 *     summary: Lista todos os filmes
 *     responses:
 *       200:
 *         description: Lista de filmes retornada com sucesso
 *       404:
 *         description: Nenhum filme encontrado
 */
filmsRoute.get("/", filmsController.getAllFilms);
/**
 * @openapi
 * /films/{id}:
 *   get:
 *     tags:
 *       - Filmes
 *     summary: Lista um filme por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filme encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Film'
 *             example:
 *               title: "Matrix"
 *               year: 1999
 *               description: "Um clássico de ficção científica"
 *       404:
 *         description: Filme não encontrado
 */
filmsRoute.get("/:id", filmsController.getFilmById);
filmsRoute.post("/", filmsController.createFilm);
filmsRoute.delete("/:id", filmsController.deleteFilm);
filmsRoute.put("/:id", filmsController.updateFilm);

export default filmsRoute;