import { collection, doc } from "firebase/firestore";
import { userDb } from "../config/firebase";

export const UserCollectionService = collection(userDb, "users");

export function setUserDoc(email) {
  return doc(userDb, "users", email.toString());
}
