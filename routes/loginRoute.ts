import express from 'express';

const loginRoute = express.Router();

loginRoute.post("/");
loginRoute.post("/create");

export default loginRoute;