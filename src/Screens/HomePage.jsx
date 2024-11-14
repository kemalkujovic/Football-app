import React, { useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../Templates/Sidebar/Sidebar";
import classes from "./HomePage.module.css";
import LiveMatchTable from "../components/Table/LiveMatchTable";

const HomePage = () => {
  return (
    <>
      <Grid container direction="row">
        <Grid
          item
          lg={2}
          md={3}
          sm={3}
          className={`${classes.responsiveContainer}`}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          lg={10}
          md={9}
          sm={9}
          xs={12}
          className={`${classes.responsiveLayout}`}
        >
          <LiveMatchTable />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
