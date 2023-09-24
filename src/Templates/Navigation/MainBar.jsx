import { Grid } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.png";
import classes from "./MainBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const MainBar = (title, icons) => {
  return (
    <>
      <div className={classes.mainBar}>
        <Grid>
          <img src={logo} alt="Logo" className={classes.logo} />
        </Grid>
        <Grid display="flex" alignItems="center">
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <div className={classes.searchIcon}>
            <PersonIcon />
            <p>Login</p>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default MainBar;
