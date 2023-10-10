import React, { useContext } from "react";
import League from "../League/League";
import classes from "./Favorites.module.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../context/FavoriteContext";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { lastDays } from "../../util/helper";
import { useDarkMode } from "../../context/DarkModeContext";
const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoriteContext);
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  const date = lastDays();
  const today = date.danasnjiDatum;
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
              <Link
                style={{ color: isDarkMode ? "white" : "" }}
                to={`/league/${item.league_id}`}
              >
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
