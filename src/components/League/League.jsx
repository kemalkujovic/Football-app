import React from "react";
import { useSelector } from "react-redux";

const League = () => {
  const selector = useSelector((state) => state.football.leagueData);
  return (
    <div>
      {selector?.map((league, index) => {
        return (
          <div key={index}>
            <img
              src={league.league_logo}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = league.country_logo;
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default League;
