import React from "react";
import classes from "./HomeMatches.module.css";
const LastMatches = ({ item }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.logoWrappper}>
          <p>{item.match_date}</p>
          <img
            src={item.country_logo}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = item.league_logo;
            }}
            alt="Logo"
          />
        </div>
        <p>{item.league_name.slice(0, 2)}</p>
        <div className={classes.teamWrapper}>
          <div>
            <img src={item.team_home_badge} alt="" />
            <p
              className={
                item.match_hometeam_score > item.match_awayteam_score
                  ? classes.winner
                  : ""
              }
            >
              {item.match_hometeam_name}
            </p>
          </div>
          <div>
            <img src={item.team_away_badge} alt="" />
            <p
              className={
                item.match_awayteam_score > item.match_hometeam_score
                  ? classes.winner
                  : ""
              }
            >
              {item.match_awayteam_name}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.scoreWrapper}>
        <p>{item.match_hometeam_score}</p>
        <p>{item.match_awayteam_score}</p>
      </div>
    </div>
  );
};

export default LastMatches;
