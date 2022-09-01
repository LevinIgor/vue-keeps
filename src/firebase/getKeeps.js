import db from "@/firebase";
import { query, collection, limit, getDocs,orderBy } from "firebase/firestore";

export default function () {
  return new Promise(async (resolve) => {
    let keeps = [];

    const q = query(collection(db, "keeps"), limit(200),orderBy("id", "desc"));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      keeps.push(doc.data());
    });

    resolve(keeps);
  });
}
