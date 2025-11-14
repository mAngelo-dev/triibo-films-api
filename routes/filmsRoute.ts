import express from "express";
import filmsController from "../controllers/filmsController";

const filmsRoute = express.Router();

filmsRoute.get("/", filmsController.getAllFilms);

export default filmsRoute;