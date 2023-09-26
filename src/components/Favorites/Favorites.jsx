import React from "react";
import { leagues } from "../../util/helper";
import League from "../League/League";
import classes from "./Favorites.module.css";
import { useDispatch } from "react-redux";
import { leagueResults, leagueStandings } from "../../app/footballSlice";
const Favorites = () => {
  const dispatch = useDispatch();
  function resultsHandler(id) {
    dispatch(leagueResults(+id));
    dispatch(leagueStandings(+id));
  }
  return (
    <div className={classes.mainContainer}>
      {leagues?.map((item, index) => {
        return (
          <div className={classes.favoritesDiv} key={index}>
            <League
              key={item.league_id}
              league_logo={item.league_logo}
              league_id={item.league_id}
              league_name={item.league_name}
              country_logo={item.country_logo}
              onClick={() => resultsHandler(item.league_id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
