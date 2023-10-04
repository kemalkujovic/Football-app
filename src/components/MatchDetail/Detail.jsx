import React from "react";
import classes from "./MatchDetail.module.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SyncIcon from "@mui/icons-material/Sync";
const Detail = ({ item }) => {
  return (
    <div>
      <div
        className={
          item?.away_scorer || item?.away_fault || item?.team === "away"
            ? classes.awayContainer
            : classes.homeContainer
        }
      >
        {item.home_scorer && (
          <div className={classes.scoreWrapper}>
            <p>{item.time}'</p>
            <div className={classes.goalIconWrapper}>
              <SportsSoccerIcon />
              <p>{item.score}</p>
            </div>
            <div className={classes.goalScoreWrapper}>
              <p>{item.home_scorer} </p>
              {item.home_assist && (
                <p className={classes.assistGoal}>({item.home_assist})</p>
              )}
            </div>
          </div>
        )}
        {item?.team === "home" && (
          <div className={classes.scoreWrapper}>
            <p>{item.time}</p>
            <SyncIcon />
            <p>{item.substitution.split(" | ")[1]}</p>
            <p style={{ color: "gray" }}>
              ({item.substitution.split(" | ")[0]})
            </p>
          </div>
        )}
        <div className={classes.scoreWrapper}>
          {item?.home_fault && <p>{item.time}'</p>}

          {item.home_fault && (
            <div
              className={
                item.card === "red card" ? classes.redCard : classes.yellowCard
              }
            ></div>
          )}

          <div>
            <p>{item.home_fault}</p>
          </div>
        </div>

        <div className={classes.scoreWrapper}>
          <p>{item.away_fault}</p>
          {item.away_fault && (
            <div
              className={
                item.card === "red card" ? classes.redCard : classes.yellowCard
              }
            ></div>
          )}
          {item?.away_fault && <p>{item.time}'</p>}
        </div>

        {item.away_scorer && (
          <div className={classes.scoreWrapper}>
            {item.away_assist && (
              <p className={classes.assistGoal}>({item.away_assist})</p>
            )}
            <p>{item.away_scorer}</p>
            <div className={classes.goalIconWrapper}>
              <SportsSoccerIcon />
              <p>{item.score}</p>
            </div>
            <p>{item.time}'</p>
          </div>
        )}

        {item?.team === "away" && (
          <div style={{ marginRight: "3px" }} className={classes.scoreWrapper}>
            <p style={{ color: "gray" }}>
              ({item.substitution.split(" | ")[0]})
            </p>
            <p>{item.substitution.split(" | ")[1]}</p>
            <SyncIcon />
          </div>
        )}

        {item?.team === "away" && <p>{item.time}'</p>}
      </div>
    </div>
  );
};

export default Detail;
