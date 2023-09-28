import React, { createContext, useEffect, useState } from "react";
import { leagues } from "../util/helper";
export const FavoriteContext = createContext();

const getInitalState = () => {
  const team = localStorage.getItem("team");
  return team ? JSON.parse(team) : initTeam;
};

const initTeam = leagues;

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(getInitalState);

  const addFavorite = (country) => {
    console.log(country);
    if (
      !favorites.some((favorite) => favorite.league_id === country.league_id)
    ) {
      setFavorites((prevFavorites) => [...prevFavorites, country]);
    }
  };

  // Funkcija za uklanjanje favorita
  const removeFavorite = (country) => {
    setFavorites((prevFavorites) => {
      const newLeague = prevFavorites.filter((fav) => fav !== country);
      return newLeague;
    });
  };
  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(favorites));
  }, [favorites]);

  // useEffect(() => {
  //   const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  //   if (storedFavorites && storedFavorites.length > 0) {
  //     setFavorites(storedFavorites);
  //   }

  //   // else {
  //   //   setFavorites(leagues);
  //   // }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
