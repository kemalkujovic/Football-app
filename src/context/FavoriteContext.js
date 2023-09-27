import React, { createContext, useEffect, useState } from "react";
import { leagues } from "../util/helper";
export const FavoriteContext = createContext();
export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (country) => {
    if (!favorites.includes(country)) {
      setFavorites((prevFavorites) => [...prevFavorites, country]);
    }
  };

  // Funkcija za uklanjanje favorita
  const removeFavorite = (country) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav !== country)
    );
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites && storedFavorites.length > 0) {
      setFavorites(storedFavorites);
    }
    //  else {
    //   setFavorites(leagues);
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
