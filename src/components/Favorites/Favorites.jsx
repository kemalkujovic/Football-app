import React, { useContext } from "react";
import { leagues } from "../../util/helper";
import League from "../League/League";
import classes from "./Favorites.module.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../context/FavoriteContext";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Button, Tooltip } from "@mui/material";
const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoriteContext);
  const handleIconClick = (item) => {
    removeFavorite(item);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.favouritesWrapper}>
        <TurnedInIcon />
        <p>FAVOURITES</p>
      </div>
      {favorites?.map((item, index) => {
        return (
          <div className={classes.favoritesDiv} key={index}>
            <div>
              <Link to={`/league/${item.league_id}`}>
                <League
                  key={item.league_id}
                  league_logo={item.league_logo}
                  league_id={item.league_id}
                  league_name={item.league_name}
                  country_logo={item.country_logo}
                />
              </Link>
              <Tooltip title="Remove From Favorites" arrow>
                <StarBorderIcon onClick={() => handleIconClick(item)} />
              </Tooltip>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
