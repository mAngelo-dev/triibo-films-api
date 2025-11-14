// Para executar é necessário utilizar as variaveis de ambientes informadas no README.md
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import filmsRoute from "./routes/filmsRoute";

dotenv.config({path: __dirname + '/.env'})

const PORT = process.env.PORT || 3000;

const server = express()

server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }
))

server.use(express.json());

server.use('/films', filmsRoute);


server.listen(PORT, () => {
  console.log(`Triibo-Films API is running on port: ${PORT}`)
})