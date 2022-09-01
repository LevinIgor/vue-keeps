import db from "@/firebase";
import { query, collection, getDocs } from "firebase/firestore";

export default async function () {
  const q = query(collection(db, "keeps"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size;
}
