// Para executar é necessário utilizar as variaveis de ambientes informadas no README.md
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import filmsRoute from "./routes/filmsRoute";
import loginRoute from "./routes/loginRoute";
import swaggerSpec from "./configs/swagger";
import swaggerUi from "swagger-ui-express";

dotenv.config({path: __dirname + '/.env'})

const PORT = process.env.PORT || 3000;

const server = express()

server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }
))

server.use(express.json());

server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

server.use('/films', filmsRoute);
server.use('/login', loginRoute);

server.listen(PORT, () => {
  console.log(`Triibo-Films API is running on port: ${PORT}`)
})