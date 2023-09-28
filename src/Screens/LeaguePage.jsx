import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  leagueFixtures,
  leagueResults,
  leagueStandings,
  leagueTopScores,
} from "../app/footballSlice";
import Sidebar from "../Templates/Sidebar/Sidebar";
import Layout from "../Templates/Layout/Layout";
import { Grid } from "@mui/material";
import TopScores from "../components/TablePlayers/TopScores";
import classes from "./HomePage.module.css";
const LeaguePage = () => {
  const { projectsId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(leagueResults(projectsId));
    dispatch(leagueStandings(projectsId));
    dispatch(leagueFixtures(projectsId));
    dispatch(leagueTopScores(projectsId));
  }, [projectsId]);
  return (
    <div>
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
          <Layout />
        </Grid>
      </Grid>
    </div>
  );
};

export default LeaguePage;
