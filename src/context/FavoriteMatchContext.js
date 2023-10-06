import React, { createContext, useEffect, useState } from "react";
export const FavoriteMatchContext = createContext();

const getInitalState = () => {
  const matchData = localStorage.getItem("match");
  return matchData ? JSON.parse(matchData) : [];
};

export const FavoriteMatchContextProvider = ({ children }) => {
  const [matchFavorit, setMatchFavorites] = useState(getInitalState);
  const [goal, setGoal] = useState(false);
  const addFavorite = (country) => {
    if (
      !matchFavorit.some((favorite) => favorite?.match_id === country?.match_id)
    ) {
      setMatchFavorites((prevFavorites) => [...prevFavorites, country]);
    }
  };

  const removeFavorite = (country) => {
    setMatchFavorites((prevFavorites) => {
      const newLeague = prevFavorites.filter(
        (fav) => fav.match_id !== country.match_id
      );
      return newLeague;
    });
  };
  const updateMatchInLocalStorage = (
    matchId,
    newStatus,
    match_hometeam_score,
    match_awayteam_score
  ) => {
    setMatchFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.map((fav) => {
        if (fav.match_id === matchId) {
          if (fav.match_hometeam_score !== match_hometeam_score) {
            setGoal(true);
          }
          return {
            ...fav,
            match_status: newStatus,
            match_hometeam_score: match_hometeam_score,
            match_awayteam_score: match_awayteam_score,
          };
        }
        return fav;
      });
      localStorage.setItem("match", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  useEffect(() => {
    localStorage.setItem("match", JSON.stringify(matchFavorit));
  }, [matchFavorit]);

  return (
    <FavoriteMatchContext.Provider
      value={{
        matchFavorit,
        addFavorite,
        removeFavorite,
        updateMatchInLocalStorage,
        goal,
        setGoal,
      }}
    >
      {children}
    </FavoriteMatchContext.Provider>
  );
};
