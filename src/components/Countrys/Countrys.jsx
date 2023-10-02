import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Countrys.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getLeague, getLiveMatch } from "../../app/footballSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import League from "../League/League";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../context/FavoriteContext";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Tooltip } from "@mui/material";
const Countrys = () => {
  const { addFavorite } = useContext(FavoriteContext);
  const handleIconClick = (item) => {
    addFavorite(item);
    dispatch(getLiveMatch());
  };
  const [iconStates, setIconStates] = useState({});
  const onClickIcons = (index) => {
    setIconStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  /// lige
  const selector2 = useSelector((state) => state.football.leagueData);
  const dispatch = useDispatch();
  const onClickHandler = (id, index) => {
    dispatch(getLeague(id));
    onClickIcons(index);
    setIsOpen((isOpen) => {
      if (isOpen.includes(index)) {
        return isOpen.filter((i) => i !== index);
      } else {
        return [...isOpen, index];
      }
    });
  };

  ////////
  const [more, setMore] = useState(false);
  const selector = useSelector((state) => state.football.footballData);
  const country = selector.slice(0, 10);
  const dataCountrys = selector.slice(10, 140);
  const [isOpen, setIsOpen] = useState([]);

  return (
    <div className={classes.mainCointainer}>
      <h1>COUNTRIES</h1>
      {country.map((el, index) => {
        return (
          <div
            key={el.country_id}
            onClick={() => onClickHandler(el.country_id, index)}
            className={classes.countryWrapper}
          >
            <div className={classes.logoWrapper}>
              <div className={classes.nameLeague}>
                <img src={el.country_logo} alt="logo" />
                <p>{el.country_name}</p>
              </div>
              {iconStates[index] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>

            {selector2 && isOpen.includes(index) && (
              <div className={classes.leagueWrapper}>
                {selector2.map((item, index) => {
                  return (
                    +item.country_id === +el.country_id && (
                      <div key={index}>
                        <Link to={`/league/${item.league_id}`}>
                          <League
                            key={item.league_id}
                            league_logo={item.league_logo}
                            league_id={item.league_id}
                            league_name={item.league_name}
                            country_logo={item.country_logo}
                          />
                        </Link>
                        <Tooltip title="Add to Favorites" arrow>
                          <TurnedInNotIcon
                            onClick={() => handleIconClick(item)}
                          />
                        </Tooltip>
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      {!more ? (
        <div className={classes.loadWrapper} onClick={() => setMore(!more)}>
          <span>Load More</span>
          <ExpandMoreIcon />
        </div>
      ) : (
        ""
      )}
      {more
        ? dataCountrys.map((el, index) => {
            return (
              <div
                key={el.country_id}
                onClick={() => onClickHandler(el.country_id, index)}
                className={classes.countryWrapper}
              >
                <div className={classes.logoWrapper}>
                  <div className={classes.nameLeague}>
                    <img src={el.country_logo} alt="logo" />
                    <p>{el.country_name}</p>
                  </div>
                  {iconStates[index] ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                </div>
                {selector2 && isOpen.includes(index) && (
                  <div className={classes.leagueWrapper}>
                    {selector2.map((item) => {
                      return (
                        +item.country_id === +el.country_id && (
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
                            <Tooltip title="Add to Favorite" arrow>
                              <TurnedInNotIcon
                                onClick={() => handleIconClick(item)}
                              />
                            </Tooltip>
                          </div>
                        )
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Countrys;
