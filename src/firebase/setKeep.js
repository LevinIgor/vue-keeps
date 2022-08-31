import db from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

export default async function (keep) {
  return new Promise((resolve) => {
    setDoc(doc(db, "keeps", keep.id.toString()), keep).then(() => {
      resolve(true);
    });
  });
}
