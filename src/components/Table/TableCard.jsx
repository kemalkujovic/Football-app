import { Grid } from "@mui/material";
import React from "react";
import classes from "./Table.module.css";
const TableCard = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.tableHeader}>
        <div className={classes.teamWrapper}>
          <p>#</p>
          <p>TIM</p>
        </div>
        <div className={classes.infoWrapper}>
          <p>P</p>
          <p>N</p>
          <p>I</p>
          <p>G</p>
          <p>B</p>
        </div>
      </div>
      <div className={classes.positionWrapper}>
        <div className={classes.teamWrapper}>
          <span>1.</span>
          <span>
            <img
              src="https://static.flashscore.com/res/image/data/0vgscFU0-lQuhqN8N.png"
              alt="Logo"
            />
            <p>Liverpool</p>
          </span>
        </div>
        <div className={classes.resultsWrapper}>
          <p>5</p>
          <p>1</p>
          <p>0</p>
          <p>16:3</p>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
