import React from "react";
import classes from "./MatchInfromation.module.css";
import SportsIcon from "@mui/icons-material/Sports";
import StadiumIcon from "@mui/icons-material/Stadium";
const MatchInfromation = ({ item }) => {
  return (
    <div>
      <div className={classes.whistleWrapper}>
        <span>
          <SportsIcon />
          REFEREE:
        </span>
        <p>{item?.match_referee}</p>
      </div>
      <div className={classes.whistleWrapper}>
        <span>
          <StadiumIcon />
          VENUE:
        </span>
        <p>{item?.match_stadium}</p>
      </div>
    </div>
  );
};

export default MatchInfromation;
