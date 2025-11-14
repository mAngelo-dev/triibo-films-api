import express from "express";
import filmsController from "../controllers/filmsController";

const filmsRoute = express.Router();

filmsRoute.get("/", filmsController.getAllFilms);
filmsRoute.get("/:id", filmsController.getFilmById);

export default filmsRoute;