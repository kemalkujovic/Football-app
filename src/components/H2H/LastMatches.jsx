import React from "react";
import classes from "./HomeMatches.module.css";
const LastMatches = ({ item }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.container}>
        <div className={classes.logoWrappper}>
          <p>{item.match_date}</p>
          <img
            src={item.country_logo ? item.country_logo : item.league_logo}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fleaguelogos%2Fsoccer%2F500%2F2310.png";
            }}
            alt="Logo"
          />
          <p>{item.league_name.slice(0, 2).toUpperCase()}</p>
        </div>
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
