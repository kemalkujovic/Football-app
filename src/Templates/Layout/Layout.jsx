import React from "react";
import classes from "./Layout.module.css";
import ResultsCard from "../../components/ResultTabel/ResultsCard";
const Layout = () => {
  return (
    <div className={classes.layourWrapper}>
      <ResultsCard />
    </div>
  );
};

export default Layout;
