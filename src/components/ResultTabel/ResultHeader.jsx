import React, { useContext, useEffect, useState } from "react";
import classes from "./ResultHeader.module.css";
import PushPinIcon from "@mui/icons-material/PushPin";
import { FavoriteContext } from "../../context/FavoriteContext";
const ResultHeader = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { item } = props;
  const { addFavorite, removeFavorite } = useContext(FavoriteContext);
  useEffect(() => {
    const matchData = JSON.parse(localStorage.getItem("league"));
    const data = matchData?.find((el) => el?.league_id === item?.league_id);
    setIsFavorite(!!data);
  }, [item]);

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
        <div className={classes.countryWrapper}>
          <img
            src={
              item.country_logo
                ? item.country_logo
                : "https://logowik.com/content/uploads/images/994_champions_league.jpg"
            }
            alt="Logo"
          />
          <p>{item?.country_name}:</p>
          <p> {item?.league_name}</p>
          {isFavorite ? (
            <span
              onClick={removeHandleClick}
              className={classes.pushPinWrapper}
            >
              <PushPinIcon />
            </span>
          ) : (
            <span className={classes.defaultPinn} onClick={handleClick}>
              <PushPinIcon />
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default ResultHeader;
