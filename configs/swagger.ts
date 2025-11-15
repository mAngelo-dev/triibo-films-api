import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
import filmSchema from "../schemas/filmSchema";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Triibo-API",
      version: "1.0.0",
      description: "Documentação da API usando Swagger",
    },
    components:{
      schemas: {
        Film: filmSchema
      }
    }
  },
  apis: [path.join(__dirname, "../routes/*.ts")],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
