#! Para executar é necessário utilizar as variaveis de ambientes informadas no README.md
import express from 'express'
import cors from 'cors'
import dotnev from 'dotenv'

dotnev.config({path: __dirname + '/.env'})

const PORT = process.env.PORT || 3000;

const server = express()

server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }
))

server.use(express.json());


server.listen(PORT, () => {
  console.log(`Triibo-Films API is running on port: ${PORT}`)
})