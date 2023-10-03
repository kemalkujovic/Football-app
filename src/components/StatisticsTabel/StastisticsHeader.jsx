import React from "react";
import classes from "./StatisticsTabel.module.css";
const StastisticsHeader = (props) => {
  const { item } = props;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.logoWrapper}>
        <img src={item?.team_home_badge} alt="Logo" />
        {item.match_live === "1" && item.match_status === "Finished" ? (
          <p
            className={
              item.match_hometeam_score > item.match_awayteam_score
                ? classes.winner
                : ""
            }
          >
            {item?.match_hometeam_name}
          </p>
        ) : item.match_live === "1" ? (
          <p>{item?.match_hometeam_name}</p>
        ) : (
          <p
            className={
              item.match_hometeam_score > item.match_awayteam_score
                ? classes.winner
                : ""
            }
          >
            {item?.match_hometeam_name}
          </p>
        )}
      </div>
      <div className={classes.container}>
        <span>
          <p>{item.match_date}</p>
          <p>{item.match_time}</p>
        </span>
        {item.match_live === "1" && item.match_status === "Finished" ? (
          <div className={classes.resultWrapper}>
            <p>{item.match_hometeam_score}</p>
            <p>-</p>
            <p>{item.match_awayteam_score}</p>
          </div>
        ) : item.match_live === "1" ? (
          <div className={classes.matchLive}>
            <p>{item.match_hometeam_score}</p>
            <p>-</p>
            <p>{item.match_awayteam_score}</p>
          </div>
        ) : (
          <div className={classes.resultWrapper}>
            <p>{item.match_hometeam_score}</p>
            <p>-</p>
            <p>{item.match_awayteam_score}</p>
          </div>
        )}

        {item.match_status === "Finished" ? (
          <div>
            <p style={{ fontWeight: "700" }}>{item.match_status}</p>
          </div>
        ) : item.match_status === "Half Time" ? (
          <div className={classes.matchStatusWrapper}>
            <p style={{ fontWeight: "700" }}>{item.match_status}</p>
          </div>
        ) : item.match_live === "1" ? (
          <div className={classes.matchStatusWrapper}>
            <p style={{ fontWeight: "700" }}>{item.match_status}'</p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={classes.logoWrapper}>
        <img src={item?.team_away_badge} alt="Logo" />
        {item.match_live === "1" && item.match_status === "Finished" ? (
          <p
            className={
              item.match_awayteam_score > item.match_hometeam_score
                ? classes.winner
                : ""
            }
          >
            {item?.match_awayteam_name}
          </p>
        ) : item.match_live === "1" ? (
          <p>{item?.match_awayteam_name}</p>
        ) : (
          <p
            className={
              item.match_awayteam_score > item.match_hometeam_score
                ? classes.winner
                : ""
            }
          >
            {item?.match_awayteam_name}
          </p>
        )}
      </div>
    </div>
  );
};

export default StastisticsHeader;
