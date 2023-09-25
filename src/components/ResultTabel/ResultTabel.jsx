import { Grid } from "@mui/material";
import React from "react";
import classes from "./ResultTabel.module.css";
import { lastDays } from "../../util/helper";
const ResultTabel = (props) => {
  const days = lastDays();
  const {
    countryLogo,
    matchDate,
    matchTime,
    homeLogo,
    awayLogo,
    homeName,
    awayName,
    homeGoal,
    awayGoal,
    homeHalfGoal,
    awayHalfGoal,
  } = props;
  return (
    <div className={classes.mainContainer}>
      <Grid
        marginLeft="20px"
        width="70%"
        container
        item
        justifyContent="space-between"
      >
        <div className={classes.timeLogoWrapper}>
          <div className={classes.timeZoneWrapper}>
            <p>{matchDate}</p>
            <p>{matchTime}</p>
          </div>
          <div className={classes.clubsWrapper}>
            <span>
              <img
                src={homeLogo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = countryLogo;
                }}
                alt="Logo1"
              />
              <p className={homeGoal > awayGoal ? classes.winner : ""}>
                {homeName}
              </p>
            </span>
            <span>
              <img
                src={awayLogo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = countryLogo;
                }}
                alt="Logo1"
              />
              <p className={awayGoal > homeGoal ? classes.winner : ""}>
                {awayName}
              </p>
            </span>
          </div>
        </div>
        <div className={classes.resultsWrapper}>
          <div>
            <p>{homeGoal}</p>
            <p>{awayGoal}</p>
          </div>
          <div>
            <p>({homeHalfGoal})</p>
            <p>({awayHalfGoal})</p>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default ResultTabel;
