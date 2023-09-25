import React from "react";
import classes from "./Layout.module.css";
import ResultTabel from "../../components/ResultTabel/ResultTabel";
const Layout = () => {
  return (
    <div className={classes.layourWrapper}>
      <ResultTabel />
    </div>
  );
};

export default Layout;
