import React from "react";
import LiveMatch from "../components/LiveMatch/LiveMatch";
import { Grid } from "@mui/material";
import Sidebar from "../Templates/Sidebar/Sidebar";
import classes from "./HomePage.module.css";
import LiveMatchTable from "../components/Table/LiveMatchTable";
const HomePage = () => {
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
        <LiveMatchTable />
      </Grid>
    </Grid>
  );
};

export default HomePage;
