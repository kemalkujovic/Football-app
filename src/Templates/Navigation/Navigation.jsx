import React from "react";
import MainBar from "./MainBar";
import LinkBar from "./LinkBar";
import { Grid } from "@mui/material";
import classes from "./MainBar.module.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import StarIcon from "@mui/icons-material/Star";
const Navigation = (title, icons) => {
  const data = [
    {
      title: "FAVORITI",
      icon: <StarIcon />,
    },
    {
      title: "FUDBAL",
      icon: <SportsSoccerIcon />,
    },
  ];

  return (
    <>
      <Grid className={classes.mainGrid}>
        <MainBar />
        <div className={classes.linkWrapper}>
          {data.map((el, index) => {
            return <LinkBar key={index} title={el.title} icons={el.icon} />;
          })}
        </div>
      </Grid>
    </>
  );
};

export default Navigation;
