const filmSchema = {
  type: "object",
  properties: {
    Title: {
      type: "string",
      description: "Título do Filme"
    },
    Year: {
      type: "string",
      description: "Ano de Lançamento do Filme"
    },
    Description: {
      type: "string",
      description: "Descrição breve do Filme"
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