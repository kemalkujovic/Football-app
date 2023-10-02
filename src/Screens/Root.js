import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Navigation from "../Templates/Navigation/Navigation";
import classes from "./HomePage.module.css";
const Root = () => {
  const location = useLocation();
  const { id } = useParams();
  const isProbaRoute = location.pathname === `/statistics/${id}`;
  return (
    <>
      {!isProbaRoute && <Navigation />}
      <main className={classes.mainContainer}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
