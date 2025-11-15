import express from 'express';
import loginController from "../controllers/loginController";

const loginRoute = express.Router();

loginRoute.post("/", loginController.login);
loginRoute.post("/create", loginController.createUser);

export default loginRoute;