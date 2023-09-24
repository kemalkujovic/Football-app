import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Countrys.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getLeague } from "../../app/footballSlice";
const Countrys = () => {
  /// lige
  const dispatch = useDispatch();
  const onClickHandler = (id) => {
    dispatch(getLeague(id));
  };
  ////////
  const [more, setMore] = useState(false);
  const selector = useSelector((state) => state.football.footballData);
  const country = selector.slice(0, 10);
  const dataCountrys = selector.slice(10, 40);
  return (
    <div>
      {country.map((el, index) => {
        return (
          <div
            onClick={() => onClickHandler(el.country_id)}
            key={index}
            className={classes.countryWrapper}
          >
            <img src={el.country_logo} />
            <p>{el.country_name}</p>
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
                onClick={() => onClickHandler(el.country_id)}
                key={index}
                className={classes.countryWrapper}
              >
                <img src={el.country_logo} />
                <p>{el.country_name}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Countrys;
