import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const animalsCollection = collection(db, "animals");

export async function getAllListedAnimals() {
  try {
    const listedAnimalsCollection = query(
      collection(db, "animals"),
      where("status", "==", "listed")
    );
    const listedAnimalsSnapshot = await getDocs(listedAnimalsCollection);
    const listAnimals = listedAnimalsSnapshot.docs.map((doc) => ({
      id: doc.id,
      img: doc.get("img"),
      animalBreed: doc.get("animalBreed"),
      animalType: doc.get("animalType"),
      animalAskingPrice: parseFloat(doc.get("animalAskingPrice")).toFixed(2),
      animalCollectionLocation: doc.get("animalCollectionLocation"),
      animalColor: doc.get("animalColor"),
      animalDispatchDate: doc.get("animalDispatchDate"),
      animalName: doc.get("animalName"),
      animalSickness: doc.get("animalSickness"),
      animalWeight: parseInt(doc.get("animalWeight")),
      animalYearsAge: parseInt(doc.get("animalYearsAge")),
      description: doc.get("description"),
      imageDownloadUrl: doc.get("imageDownloadUrl"),
      auctioned: doc.get("auctioned"),
      available: doc.get("available"),
      status: doc.get("status"),
      variants: doc.get("variants"),
      supplierName: doc.get("supplierName"),
      supplierNumber: doc.get("supplierNumber"),
    }));
    console.log(listAnimals);

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
