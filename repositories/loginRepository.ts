import {db} from "../configs/firebase";
import loginDTO from "../interfaces/loginDTO";
import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;

const loginRepository = {
  createUser: async (loginData: loginDTO) => {
    const docToBeAdded = await db.collection("login").add({
      email: loginData.email,
      password: loginData.password,
      createdAt: Timestamp.now(),
    })

    return { id: docToBeAdded.id, email: loginData.email };
  },
}

export default loginRepository;