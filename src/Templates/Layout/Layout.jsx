import React from "react";
import classes from "./Layout.module.css";
import ResultsCard from "../../components/ResultTabel/ResultsCard";
import Table from "../../components/Table/Table";
const Layout = () => {
  return (
    <div className={classes.layourWrapper}>
      <ResultsCard />
      <Table />
    </div>
  );
};

export default Layout;
