import React from "react";
import classes from "./Layout.module.css";
import ResultsCard from "../../components/ResultTabel/ResultsCard";
import Table from "../../components/Table/Table";
import Fixtures from "../../components/LeagueFixtures/Fixtures";
const Layout = () => {
  return (
    <div className={classes.layourWrapper}>
      <ResultsCard />
      <Fixtures />
      <Table />
    </div>
  );
};

export default Layout;
