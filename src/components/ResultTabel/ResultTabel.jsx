import { Grid } from "@mui/material";
import React from "react";
import classes from "./ResultTabel.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Tooltip } from "@mui/material";
const ResultTabel = (props) => {
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
        width="75%"
        container
        item
        justifyContent="space-between"
        className={classes.responsiveContainer}
      >
        <div className={classes.timeLogoWrapper}>
          <div className={classes.timeZoneWrapper}>
            <Tooltip title="Add to Favorites" arrow>
              <StarBorderIcon />
            </Tooltip>
            <p>{matchDate.split("-").slice(1).join(".")}</p>
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
          <div className={classes.finalResult}>
            {homeGoal.length > 0 ? (
              <span>
                <p>{homeGoal}</p>
                <p>{awayGoal}</p>
              </span>
            ) : (
              <span>
                <p>-</p>
                <p>-</p>
              </span>
            )}
          </div>
          <div>
            {homeHalfGoal.length > 0 ? (
              <span>
                <p>({homeHalfGoal})</p>
                <p>({awayHalfGoal})</p>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default ResultTabel;
