import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Templates/Navigation/Navigation";
import classes from "./HomePage.module.css";
const Root = () => {
  return (
    <>
      <Navigation />
      <main className={classes.mainContainer}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
