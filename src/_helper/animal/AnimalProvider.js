import React, { useState } from "react";
import Context from "./index";
import { getAllListedAnimals } from "../../services/animalService";
import PropTypes from "prop-types";

const AnimalProvider = (props) => {
  const [allAnimals, setAllAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState({});

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

  const handleFetchData = () => {
    const fetchData = async () => {
      try {
        const animals = await getAllListedAnimals();
        // Do something with the animals array:
        // - Update state
        setAllAnimals(animals);
        // - Display the data in your component
        // ...
      } catch (error) {
        console.error("Error fetching animals:", error);
        // Handle error appropriately
      }
    };

    fetchData();
  };

  const pickSelectedItem = (id) => {
    const foundAnimal = allAnimals.find((animal) => animal.id === id);
    setSelectedAnimal(foundAnimal);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        allAnimals,
        selectedAnimal,
        setSelectedAnimal,
        handleFetchData,
        handleListAnimal,
        pickSelectedItem,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

AnimalProvider.propTypes = {
  children: PropTypes.any,
};
export default AnimalProvider;
