import React from "react";
import classes from "./MatchDetail.module.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
const Detail = ({ item }) => {
  return (
    <div>
      <div
        className={
          item?.away_scorer || item?.away_fault
            ? classes.awayContainer
            : classes.homeContainer
        }
      >
        {item.home_fault && (
          <div
            className={
              item.card === "red card" ? classes.redCard : classes.yellowCard
            }
          ></div>
        )}
        {item.away_fault && (
          <div
            className={
              item.card === "red card" ? classes.redCard : classes.yellowCard
            }
          ></div>
        )}
        <p>{item.time}</p>
        {item.away_scorer && (
          <div className={classes.scoreWrapper}>
            <p>{item.away_scorer}</p>
            {item.away_assist && <p>({item.away_assist})</p>}
            <p>{item.score}</p>
            <SportsSoccerIcon />
          </div>
        )}
        {item.home_scorer && (
          <div className={classes.scoreWrapper}>
            <p>{item.home_scorer} </p>
            {item.home_assist && <p>({item.home_assist})</p>}
            <p>{item.score}</p>
            <SportsSoccerIcon />
          </div>
        )}
        <p>{item.away_fault}</p>
        <p>{item.home_fault}</p>
      </div>
    </div>
  );
};

export default Detail;
