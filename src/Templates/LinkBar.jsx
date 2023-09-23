import { Grid } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import classes from "./MainBar.module.css";
const LinkBar = () => {
  return (
    <>
      <div className={classes.linkButtonWrapper}>
        <div className={classes.linkWrapper}>
          <StarIcon />
          <span>FAVORITI</span>
        </div>
        <div className={classes.linkWrapper}>
          <SportsSoccerIcon />
          <span>FUDBAL</span>
        </div>
      </div>
    </>
  );
};

export default LinkBar;
