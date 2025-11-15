import { Request, Response } from "express";
import loginService from "../services/loginService";

const loginController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const {email, password} = req.body;
      if (!email || !password){
        return res.status(400).json({
          message: "Preencha todos os campos requeridos "
        })
      }
      await loginService.createUser({email, password})
      return res.status(201).json({
        message: "Usuário criado com sucesso."
      })
    } catch (error){
      return res.status(500).json({
        message: "Algo deu errado ao criar usuário"
      })
    }
  },

};

export default loginController;