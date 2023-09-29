import React from "react";
import FavoriteMatch from "../components/FavoriteMatch/FavoriteMatch";
import { Grid } from "@mui/material";
import Sidebar from "../Templates/Sidebar/Sidebar";
const FavoritePage = () => {
  return (
    <>
      <div>
        <Grid lg={12} item container direction="row">
          <Grid lg={2} md={3} sm={3} item>
            <Sidebar />
          </Grid>
          <Grid lg={10} md={9} sm={9} xs={12} item>
            <FavoriteMatch />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FavoritePage;
