import express from "express";
import filmsController from "../controllers/filmsController";
import authMiddleware from "../middleware/authMiddleware";

const filmsRoute = express.Router();

filmsRoute.use(authMiddleware.auth)

filmsRoute.get("/", filmsController.getAllFilms);
filmsRoute.get("/:id", filmsController.getFilmById);
filmsRoute.post("/", filmsController.createFilm);
filmsRoute.delete("/:id", filmsController.deleteFilm);
filmsRoute.put("/:id", filmsController.updateFilm);

export default filmsRoute;