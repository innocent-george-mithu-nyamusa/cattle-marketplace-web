import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const animalsCollection = collection(db, "animals");
export const UserCollectionService = collection(db, "users");

export function setUserDoc(email) {
  return doc(db, "users", email.toString());
}

export async function getAllAnimals() {
  const animalsSnapshot = await getDocs(animalsCollection);
  const animalsList = animalsSnapshot.docs.map((doc) => doc.data());
  return animalsList;
}

export async function getAllAnimalType(animal = "cattle") {
  const animalTypeList = (await getDocs(collection(db, "animals", `${animal}`))).docs.map((doc) =>
    doc.data()
  );
  return animalTypeList;
}
// export async function getAllAnimalWithFilter(animal='cattle', breed='', gender='') {

//   return
// }
