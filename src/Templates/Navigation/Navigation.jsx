import React, { useContext } from "react";
import MainBar from "./MainBar";
import { Grid } from "@mui/material";
import classes from "./MainBar.module.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import StarIcon from "@mui/icons-material/Star";
import { NavLink } from "react-router-dom";
import { FavoriteMatchContext } from "../../context/FavoriteMatchContext";
const Navigation = () => {
  const { matchFavorit } = useContext(FavoriteMatchContext);
  return (
    <>
      <header className={classes.headerContainer}>
        <Grid className={classes.mainGrid}>
          <MainBar />
          <div className={classes.linkWrapper}>
            <div className={classes.linkButtonWrapper}>
              <div className={classes.linkWrapper}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  to="favorite"
                >
                  <StarIcon />
                  <span>FAVORITI</span>
                  <div className={classes.circleWrapper}>
                    {matchFavorit ? matchFavorit.length : "0"}
                  </div>
                </NavLink>
              </div>
              <div className={classes.linkWrapper}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  to="/"
                >
                  <SportsSoccerIcon />
                  <span>FUDBAL</span>
                </NavLink>
              </div>
            </div>
          </div>
        </Grid>
      </header>
    </>
  );
};

export default Navigation;
