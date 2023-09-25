import { Grid } from "@mui/material";
import React from "react";
import classes from "./ResultTabel.module.css";
const ResultTabel = (props) => {
  return (
    <div>
      <Grid container item>
        <div className={classes.countryWrapper}>
          <p>ALBANIJA: SuperLiga</p>
        </div>
        <div className={classes.timeZoneWrapper}>
          <p>23.09</p>
          <p>15:00</p>
        </div>
        <div className={classes.clubsWrapper}>
          <span>
            <img src="" alt="Logo1" />
            <p>Liverpool</p>
          </span>
          <span>
            <img src="" alt="Logo1" />
            <p>Arsenal</p>
          </span>
        </div>
        <div className={classes.resultsWrapper}>
          <div>
            <p>1</p>
            <p>0</p>
          </div>
          <div>
            <p>(2)</p>
            <p>(0)</p>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default ResultTabel;
