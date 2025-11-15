import loginDTO from "../interfaces/loginDTO";
import loginRepository from "../repositories/loginRepository";
import passwordUtils from "../utils/passwordHashing";

const loginService = {
  createUser: async (loginData: loginDTO)=> {
    const userNotExists = await loginRepository.getUserByEmail(loginData.email);
    if (userNotExists){
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

}

export default loginService;