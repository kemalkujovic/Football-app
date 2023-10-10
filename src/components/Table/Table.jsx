import React, { useState } from "react";
import TableCard from "./TableCard";
import { useSelector } from "react-redux";
import classes from "./Table.module.css";
import TopScores from "../TablePlayers/TopScores";
import { DarkModeProvider, useDarkMode } from "../../context/DarkModeContext";
const Table = (props) => {
  const [active, setActive] = useState(true);
  const { isDarkMode } = useDarkMode();
  return (
    <section style={{ background: isDarkMode ? "#00141e" : "" }}>
      <div
        className={
          isDarkMode ? classes.buttonsDarkWrapper : classes.buttonsWrapper
        }
      >
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
      {active ? (
        <DarkModeProvider>
          <TableCard teams={props} />
        </DarkModeProvider>
      ) : (
        <DarkModeProvider>
          <TopScores teams={props} />
        </DarkModeProvider>
      )}
    </section>
  );
};

export default Table;
