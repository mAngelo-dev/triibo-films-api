import { db } from "../configs/firebase";

async function test() {
  const snapshot = await db.collection("test").get();
  console.log("Firestore conectou! Documentos:", snapshot.size);
}

test();