const filmSchema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      description: "Título do Filme"
    },
    year: {
      type: "string",
      description: "Ano de Lançamento do Filme"
    },
    description: {
      type: "string",
      description: "Descrição breve do Filme"
    },
    imdbID: {
      type: "string",
      description: "ID do omdbApi"
    },
    createdAt: {
      type: "object",
      properties: {
        _seconds: { type: "integer" },
        _nanoseconds: { type: "integer" }
      }
    },
    updatedAt: {
      type: "object",
      properties: {
        _seconds: {type: "integer"},
        _nanoseconds: {type: "integer"}
      }
    }
  }
}

export default filmSchema;