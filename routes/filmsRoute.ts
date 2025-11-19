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
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   data:
 *                     $ref: '#/components/schemas/Film'
 *       404:
 *         description: Nenhum filme encontrado
 */
filmsRoute.get("/", filmsController.getAllFilms);

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
 *               createdAt: {
 *                 _seconds: 0,
 *                 _nanoseconds: 0,
 *               }
 *               updatedAt: {
 *                 _seconds: 0,
 *                 _nanoseconds: 0,
 *               }
 *               details: {
 *
 *               }
 *       401:
 *          description: Não autorizado
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Não foi possível válidar suas credenciais. Por favor, realize novamente o login"
 *       404:
 *         description: Filme não encontrado
 */
filmsRoute.get("/:id", filmsController.getFilmById);

/**
 * @openapi
 * /films:
 *   post:
 *     tags:
 *       - Filmes
 *     summary: Cria um novo filme
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Film'
 *           example:
 *             title: "O insano filme do Miguel"
 *             year: "2001"
 *             description: "string"
 *     responses:
 *       201:
 *         description: Filme criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 filmId:
 *                   type: string
 *       401:
 *          description: Não autorizado
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Não foi possível válidar suas credenciais. Por favor, realize novamente o login"
 *       500:
 *         description: Algo deu errado ao criar o filme.
 */
filmsRoute.post("/", filmsController.createFilm);
/**
 * @openapi
 * /films/{id}:
 *   delete:
 *     tags:
 *       - Filmes
 *     summary: Deleta um filme pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do filme a ser deletado
 *         schema:
 *           type: string
 *           example: "10sdks1203912"
 *     responses:
 *       200:
 *         description: Filme deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Filme deletado com sucesso."
 *       401:
 *          description: Não autorizado
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Não foi possível válidar suas credenciais. Por favor, realize novamente o login"
 *       500:
 *         description: Erro interno ao deletar o filme
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Algo deu errado ao deletar o filme."
 */

filmsRoute.delete("/:id", filmsController.deleteFilm);
/**
 * @openapi
 * /films/{id}:
 *   put:
 *     tags:
 *       - Filmes
 *     summary: Atualiza um filme pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do filme a ser atualizado
 *         schema:
 *           type: string
 *           example: "abc123"
 *     requestBody:
 *       required: true
 *       description: |
 *         As chaves do body são opcionais, mas somente **title**, **year** e **description**
 *         são aceitas no corpo da requisição. Valores nulos retornarão em status 500.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Film'
 *           example:
 *             title: "O Poderoso Chefão"
 *             year: "1972"
 *             description: "Um clássico dos filmes de máfia."
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso
 *       401:
 *          description: Não autorizado
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: string
 *                    example: "Não foi possível válidar suas credenciais. Por favor, realize novamente o login"
 *       500:
 *         description: Erro interno ao atualizar o filme
 */

filmsRoute.put("/:id", filmsController.updateFilm);

export default filmsRoute;