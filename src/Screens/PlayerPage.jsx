import { Grid } from "@mui/material";
import React from "react";
import classes from "./HomePage.module.css";
import PlayerStats from "../components/PlayerStats/PlayerStats";
import Sidebar from "../Templates/Sidebar/Sidebar";
const PlayerPage = () => {
  return (
    <Grid lg={12} item container direction="row">
      <Grid lg={2} md={3} sm={3} item className={classes.responsiveContainer}>
        <Sidebar />
      </Grid>
      <Grid
        lg={10}
        md={9}
        sm={9}
        xs={12}
        item
        className={classes.responsiveLayout}
      >
        <PlayerStats />
      </Grid>
    </Grid>
  );
};

export default PlayerPage;
