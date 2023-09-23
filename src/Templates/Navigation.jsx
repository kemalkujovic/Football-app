import React from "react";
import MainBar from "./MainBar";
import LinkBar from "./LinkBar";
import { Grid } from "@mui/material";
import classes from "./MainBar.module.css";
const Navigation = () => {
  return (
    <>
      <Grid className={classes.mainGrid}>
        <MainBar />
        <LinkBar />
      </Grid>
    </>
  );
};

export default Navigation;
