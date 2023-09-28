import React, { useState } from "react";
import TableCard from "./TableCard";
import { useSelector } from "react-redux";
import classes from "./Table.module.css";
import TopScores from "../TablePlayers/TopScores";
const Table = () => {
  const [active, setActive] = useState(true);
  return (
    <section>
      <div className={classes.buttonsWrapper}>
        <button
          className={active ? classes.active : ""}
          onClick={() => setActive(!active)}
        >
          STANDINGS
        </button>
        <button
          className={!active ? classes.active : ""}
          onClick={() => setActive(!active)}
        >
          TOP SCORES
        </button>
      </div>
      {active ? <TableCard /> : <TopScores />}
    </section>
  );
};

export default Table;
