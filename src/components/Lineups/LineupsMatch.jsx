import React from "react";
import LineupCard from "./LineupCard";
import { Grid } from "@mui/material";
import classes from "./LineupCard.module.css";
import MatchOdds from "../MatchDetail/MatchOdds";
const LineupsMatch = ({ item }) => {
  return (
    <>
      <div className={classes.halfWrapper}>
        <p>STARTING LINEUPS</p>
      </div>
      <Grid container>
        <Grid item xs={6} sm={6}>
          {item.lineup.home.starting_lineups.map((item, index) => {
            return <LineupCard key={index} item={item} />;
          })}
        </Grid>
        <Grid item xs={6} sm={6}>
          {item.lineup.away.starting_lineups.map((item, index) => {
            return <LineupCard key={index} item={item} away={true} />;
          })}
        </Grid>
      </Grid>
      <div className={classes.halfWrapper}>
        <p>SUBSTITUTES</p>
      </div>
      <Grid container>
        <Grid item xs={6} sm={6}>
          {item.lineup.home.substitutes?.map((item, index) => {
            return <LineupCard key={index} item={item} />;
          })}
        </Grid>
        <Grid item xs={6} sm={6}>
          {item.lineup.away.substitutes?.map((item, index) => {
            return <LineupCard key={index} item={item} away={true} />;
          })}
        </Grid>
      </Grid>
      <div className={classes.halfWrapper}>
        <p>COACH</p>
      </div>
      <Grid container>
        <Grid item xs={6} sm={6}>
          {item.lineup.home.coach?.map((item, index) => {
            return <LineupCard key={index} item={item} />;
          })}
        </Grid>
        <Grid item xs={6} sm={6}>
          {item.lineup.away.coach?.map((item, index) => {
            return <LineupCard key={index} item={item} away={true} />;
          })}
        </Grid>
      </Grid>
      <div className={classes.halfWrapper}>
        <p>PRE-MATCH ODDS</p>
      </div>
      <div>
        <MatchOdds />
      </div>
    </>
  );
};

export default LineupsMatch;
