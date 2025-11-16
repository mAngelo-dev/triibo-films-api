import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

const authMiddleware = {
  auth: async ( req: Request, res: Response, next: NextFunction) => {
    const authorization = req.headers.authorization as string;

    if (!authorization) {
      res.status(401).json({
        message: "Não foi possível válidar suas credenciais. Por favor, realize novamente o login"
      })
    }

    const authHeader = authorization.split(' ')
    if (authHeader[0] !== "Bearer" || authHeader.length < 2) {
      res.status(401).json({
        message: "Formato de Token Inválido"
      })
    }

    const token = authHeader[1]
    jwt.verify(token, process.env.JWT_SECRET!, (error) => {
      if (error) {
        return res.status(403).json({message: "Token inválido"});
      }
      return next();
    });
  }
}

export default authMiddleware;