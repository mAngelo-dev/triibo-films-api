import {db} from "../configs/firebase";
import loginDTO from "../interfaces/loginDTO";
import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;

const loginRepository = {
  createUser: async (loginData: loginDTO) => {
    const docToBeAdded = await db.collection("users").add({
      email: loginData.email,
      password: loginData.password,
      createdAt: Timestamp.now(),
    })

    return { id: docToBeAdded.id, email: loginData.email };
  },

  getUserByEmail: async (email: string) => {
    const docUser = await db.collection("users").where(
      "email", '==', email
    ).get()

    if (docUser.docs[0]){
      return docUser.docs[0].data()
    } else {
      return {}
    }
  }
}

export default loginRepository;