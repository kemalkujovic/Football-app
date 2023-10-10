import React, { useContext, useEffect, useState } from "react";
import classes from "./ResultHeader.module.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import { FavoriteContext } from "../../context/FavoriteContext";
import { useDispatch } from "react-redux";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";
const ResultHeader = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { item } = props;
  const { addFavorite, removeFavorite } = useContext(FavoriteContext);
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  useEffect(() => {
    const matchData = JSON.parse(localStorage.getItem("league"));
    const data = matchData?.find((el) => el?.league_id === item?.league_id);
    setIsFavorite(!!data);
  }, [item, addFavorite, isFavorite]);

  const handleClick = () => {
    addFavorite(item);
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  const removeHandleClick = () => {
    removeFavorite(item);
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <>
      {item && (
        <div
          style={{
            background: isDarkMode ? "#001e28" : "",
            color: isDarkMode ? "white" : "",
          }}
          className={classes.countryWrapper}
        >
          <img
            src={
              item.country_logo
                ? item.country_logo
                : "https://logowik.com/content/uploads/images/994_champions_league.jpg"
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = item.country_logo;
            }}
            loading="lazy"
            alt="Logo"
          />
          <p>{item?.country_name}: </p>
          <Link
            style={{ color: isDarkMode ? "white" : "" }}
            className={classes.leagueNameWrapper}
            to={`/league/${item.league_id}`}
          >
            <p>{item?.league_name} </p>
          </Link>
          {isFavorite ? (
            <span
              onClick={removeHandleClick}
              className={classes.pushPinWrapper}
            >
              <Tooltip title="Remove this League from Favorite" arrow>
                <PushPinIcon />
              </Tooltip>
            </span>
          ) : (
            <span className={classes.defaultPinn} onClick={handleClick}>
              <Tooltip title="Add to Favorite this League" arrow>
                <PushPinIcon
                  style={{
                    color: isDarkMode ? "white" : "",
                  }}
                />
              </Tooltip>
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default ResultHeader;
