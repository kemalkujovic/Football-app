import React from "react";
import { leagues } from "../../util/helper";
import League from "../League/League";
import classes from "./Favorites.module.css";
import { useDispatch } from "react-redux";
import {
  leagueFixtures,
  leagueResults,
  leagueStandings,
} from "../../app/footballSlice";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { Link } from "react-router-dom";
const Favorites = () => {
  const dispatch = useDispatch();
  function resultsHandler(id) {
    dispatch(leagueResults(+id));
    dispatch(leagueStandings(+id));
    dispatch(leagueFixtures(+id));
  }
  return (
    <div className={classes.mainContainer}>
      <div className={classes.favouritesWrapper}>
        <TurnedInIcon />
        <p>FAVOURITES</p>
      </div>
      {leagues?.map((item, index) => {
        return (
          <div className={classes.favoritesDiv} key={index}>
            <Link to={`/league/${item.league_name}`}>
              <League
                key={item.league_id}
                league_logo={item.league_logo}
                league_id={item.league_id}
                league_name={item.league_name}
                country_logo={item.country_logo}
                onClick={() => resultsHandler(item.league_id)}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
