import { collection, getDocs, doc, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const animalsCollection = collection(db, "animals");
export const UserCollectionService = collection(db, "users");

export function setUserDoc(email) {
  return doc(db, "users", email.toString());
}

export async function getAllListedAnimals() {
  try {
    const listedAnimalsCollection = query(
      collection(db, "animals"),
      where("status", "==", "listed")
    );
    const listedAnimalsSnapshot = await getDocs(listedAnimalsCollection);
    const listAnimals = listedAnimalsSnapshot.docs.map((doc) => doc.data());
    return listAnimals;
  } catch (error) {
    console.error(error);
    return [];
  }
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
