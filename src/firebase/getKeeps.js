import db from "@/firebase";
import { query, collection, limit,getDocs } from "firebase/firestore";

export default function getKeeps() {

  return new Promise(async (resolve) => {

    let keeps = [];

    const q = query(collection(db, "keeps"), limit(1));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      keeps.push(doc.data());
    });

    resolve(keeps);
  });
}
