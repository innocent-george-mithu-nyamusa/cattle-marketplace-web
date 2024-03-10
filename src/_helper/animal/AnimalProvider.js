import React, { useState } from "react";
import Context from "./index";
import { getAllListedAnimals } from "../../services/animalService";
import PropTypes from "prop-types";

const AnimalProvider = (props) => {
  const [allAnimals, setAllAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState({});

  console.log(selectedAnimal);

  const handleListAnimal = (animalID, otherData) => {
    const enListAnimal = async (id, animalData) => {
      try {
        await getAllListedAnimals(id, animalData);
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
        setSelectedAnimal,
        handleListAnimal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

AnimalProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element], PropTypes.element),
};
export default AnimalProvider;
