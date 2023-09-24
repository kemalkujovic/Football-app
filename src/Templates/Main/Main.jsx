import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Layout from "../Layout/Layout";
import { Grid } from "@mui/material";

const Main = () => {
  return (
    <Grid lg={12} item container direction="row">
      <Grid lg={2} item>
        <Sidebar />
      </Grid>
      <Grid lg={10} item>
        <Layout />
      </Grid>
    </Grid>
  );
};

export default Main;
