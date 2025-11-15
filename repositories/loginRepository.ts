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
    const snapshot = await db.collection("users").where(
      "email", '==', email
    ).get()

    if (snapshot.docs[0]){
      const docUser: loginDTO = {
        id: snapshot.docs[0].id,
        email: snapshot.docs[0].data().email,
        password: snapshot.docs[0].data().password
      }

      return docUser
    } else {
      return {}
    }
  }
}

export default loginRepository;