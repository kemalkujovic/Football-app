import React from "react";
import FavoriteMatch from "../components/FavoriteMatch/FavoriteMatch";
import { Grid } from "@mui/material";
import Sidebar from "../Templates/Sidebar/Sidebar";
import classes from "./HomePage.module.css";
const FavoritePage = () => {
  return (
    <>
      <div>
        <Grid lg={12} item container direction="row">
          <Grid
            lg={2}
            md={3}
            sm={3}
            item
            className={classes.responsiveContainer}
          >
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
            <FavoriteMatch />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FavoritePage;
