import React, { useEffect, useState } from "react";
import Context from "./index";
import { listAnimal } from "../services/animalService";

const AnimalProvider = (props) => {
  const [allAnimals, setAllAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState({});

  const handleListAnimal = (animalID, otherData) => {
    const enListAnimal = async (id, animalData) => {
      try {
        await listAnimal(id, animalData);
      } catch (error) {
        console.log(error);
      }
    };
    enListAnimal(animalID, otherData);
    const updatedAnimals = allAnimals.filter((currentAnimal) => currentAnimal.id !== animalID);

    setAllAnimals(updatedAnimals);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        allAnimals,
        selectedAnimal,
        handleListAnimal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
export default AnimalProvider;
