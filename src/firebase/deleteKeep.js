import { deleteDoc, doc } from "firebase/firestore";
import db from "@/firebase";

export default async function (id) {
  return new Promise((resolve) => {
    deleteDoc(doc(db, "keeps", id.toString())).then(() => {
      resolve(true);
    });
  });
}
