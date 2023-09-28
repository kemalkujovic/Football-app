import React, { createContext, useEffect, useState } from "react";
import { leagues } from "../util/helper";
export const FavoriteContext = createContext();

const getInitalState = () => {
  const league = localStorage.getItem("league");
  return league ? JSON.parse(league) : initTeam;
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

  const removeFavorite = (country) => {
    setFavorites((prevFavorites) => {
      const newLeague = prevFavorites.filter((fav) => fav !== country);
      return newLeague;
    });
  };
  useEffect(() => {
    localStorage.setItem("league", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
