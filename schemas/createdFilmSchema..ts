const createdFilmSchema = {
  type: "object",
  properties: {
    message: {
      type: "string",
      description: "Filme criado com sucesso"
    },
    filmId: {
      type: "string",
      description: "ID do filme criado"
    }
  }
}

export default createdFilmSchema;