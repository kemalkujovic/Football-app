import React, { useEffect, useState } from "react";
import TableCard from "./TableCard";
import classes from "./Table.module.css";
import TopScores from "../TablePlayers/TopScores";
import { useDarkMode } from "../../context/DarkModeContext";
import { useSelector } from "react-redux";
const Table = (props) => {
  const [active, setActive] = useState(true);
  const { isDarkMode } = useDarkMode();
  const { stepIndex } = useSelector((state) => state.joyride);

  useEffect(() => {
    if (stepIndex === 13) {
      setActive(false);
    }
    if (stepIndex === 12) {
      setActive(true);
    }
  }, [stepIndex]);

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
      {active ? <TableCard teams={props} /> : <TopScores teams={props} />}
    </section>
  );
};

export default Table;
