import express from "express";
import filmsController from "../controllers/filmsController";

const filmsRoute = express.Router();

filmsRoute.get("/", filmsController.getAllFilms);
filmsRoute.get("/:id", filmsController.getFilmById);
filmsRoute.post("/", filmsController.createFilm);
filmsRoute.delete("/:id", filmsController.deleteFilm);
filmsRoute.put("/:id", filmsController.updateFilm);

export default filmsRoute;