import Context from './index';
import React, { useState } from 'react';

const WishListProvider = (props) => {
  const [wishlist, setWishList] = useState([]);

  const addToWishList = (animal) => {
    const animalId = animal.id;
    if (wishlist.findIndex((animal) => animal.id === animalId) !== -1) {
      const wishlists = wishlist.reduce((wishAcc, animal) => {
        if (animal.id === animalId) {
          wishAcc.push({
            ...animal,
          });
        } else {
          wishAcc.push(animal);
        }
        return wishAcc;
      }, []);
      return setWishList(wishlists);
    }

    setWishList((prev) => [...prev, { ...animal }]);
  };

  const removeFromWhishList = (animalId) => {
    setWishList(wishlist.filter((wish) => wish.id !== animalId));
  };
  return (
    <Context.Provider
      value={{
        props,
        wishlist,
        addToWishList: addToWishList,
        removeFromWhishList: removeFromWhishList,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default WishListProvider;
