import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Countrys.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Countrys = () => {
  const [more, setMore] = useState(false);
  const selector = useSelector((state) => state.football.data);
  const data = selector.slice(0, 10);
  const dataCountrys = selector.slice(10, 40);
  return (
    <div>
      {data.map((el, index) => {
        return (
          <div className={classes.countryWrapper}>
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
        ? dataCountrys.map((el) => {
            return (
              <div className={classes.countryWrapper}>
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
