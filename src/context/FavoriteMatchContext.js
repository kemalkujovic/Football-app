import React, { createContext, useEffect, useState } from "react";
export const FavoriteMatchContext = createContext();

const getInitalState = () => {
  const matchData = localStorage.getItem("match");
  return matchData ? JSON.parse(matchData) : [];
};

export const FavoriteMatchContextProvider = ({ children }) => {
  const [matchFavorit, setMatchFavorites] = useState(getInitalState);

  const addFavorite = (country) => {
    if (
      !matchFavorit.some((favorite) => favorite.match_id === country.match_id)
    ) {
      setMatchFavorites((prevFavorites) => [...prevFavorites, country]);
    }
  };

  const removeFavorite = (country) => {
    setMatchFavorites((prevFavorites) => {
      const newLeague = prevFavorites.filter((fav) => fav !== country);
      return newLeague;
    });
  };

  useEffect(() => {
    localStorage.setItem("match", JSON.stringify(matchFavorit));
  }, [matchFavorit]);

  return (
    <FavoriteMatchContext.Provider
      value={{ matchFavorit, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteMatchContext.Provider>
  );
};
