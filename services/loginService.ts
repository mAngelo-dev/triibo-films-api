import loginDTO from "../interfaces/loginDTO";
import loginRepository from "../repositories/loginRepository";
import passwordUtils from "../utils/passwordHashing";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config({path: __dirname + '/.env'})

const JWT_SECRET = process.env.JWT_SECRET || "supersecret"

const loginService = {
  createUser: async (loginData: loginDTO)=> {
    const userData: loginDTO = await loginRepository.getUserByEmail(loginData.email) as loginDTO;
    if (!userData.email){
      if (loginData.password.length < 12){
        // Aqui eu poderia ter utilizado alguma válidação mais forte
        // mas não acho que seja o intuito do back-end ficar realizando regex até pq consome muito em questão de processamento
        // TODO: Verificar melhores alternativas.
        throw new Error("Por favor, utilize uma senha mais forte.")
      }
      const hashedPassword = await passwordUtils.passwordHashing(loginData.password)

      return await loginRepository.createUser({email: loginData.email, password: hashedPassword});
    } else {
      throw new Error("Não foi possível cadastrar esse e-mail")
    }
  },

  login: async (loginData: loginDTO) => {
    const userData: loginDTO = await loginRepository.getUserByEmail(loginData.email) as loginDTO;
    if (!userData || !userData?.email || !userData.password) {
      throw new Error("Credencial inválida");
    }
    const validCredentials = await passwordUtils.passwordComparison(loginData.password, userData.password)
    if (!validCredentials){
      throw new Error("Credencial Inválida")
    }
    const token = jwt.sign(
      {
      id: userData.id,
      email: userData.email
      },
      JWT_SECRET,
      {
        expiresIn: '1d',
      });

    return {token};
  }
}

export default loginService;