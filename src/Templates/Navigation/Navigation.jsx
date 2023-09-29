import React from "react";
import MainBar from "./MainBar";
import LinkBar from "./LinkBar";
import { Grid } from "@mui/material";
import classes from "./MainBar.module.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <header className={classes.headerContainer}>
        <Grid className={classes.mainGrid}>
          <MainBar />
          <div className={classes.linkWrapper}>
            <div className={classes.linkButtonWrapper}>
              <div className={classes.linkWrapper}>
                <Link to="favorite">
                  <StarIcon />
                  <span>FAVORITI</span>
                </Link>
              </div>
              <div className={classes.linkWrapper}>
                <Link to="/">
                  <SportsSoccerIcon />
                  <span>FUDBAL</span>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </header>
    </>
  );
};

export default Navigation;
