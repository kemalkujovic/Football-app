import React from "react";
import TableCard from "./TableCard";
import { useSelector } from "react-redux";

const Table = () => {
  const selector = useSelector((state) => state.football.leagueTopScores);
  console.log(selector);
  return (
    <section>
      <TableCard />
    </section>
  );
};

export default Table;
