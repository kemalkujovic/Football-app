import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Countrys.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  getLeague,
  leagueFixtures,
  leagueResults,
  leagueStandings,
} from "../../app/footballSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import League from "../League/League";
import { Link } from "react-router-dom";
const Countrys = () => {
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
  function resultsHandler(id) {
    dispatch(leagueResults(+id));
    dispatch(leagueStandings(+id));
    dispatch(leagueFixtures(+id));
  }

  ////////
  const [more, setMore] = useState(false);
  const selector = useSelector((state) => state.football.footballData);
  const country = selector.slice(0, 10);
  const dataCountrys = selector.slice(10, 70);
  const [isOpen, setIsOpen] = useState([]);

  return (
    <div className={classes.mainCointainer}>
      <h1>ZEMLJE</h1>
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
                {selector2.map((item) => {
                  return (
                    +item.country_id === +el.country_id && (
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
