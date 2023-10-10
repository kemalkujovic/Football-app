import React, { useState } from "react";
import AllMatches from "../AllMatches/AllMatches";
import classes from "./Table.module.css";
import LiveMatch from "../LiveMatch/LiveMatch";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { lastDays } from "../../util/helper";
import { useSelector } from "react-redux";
import { useDarkMode } from "../../context/DarkModeContext";
const LiveMatchTable = () => {
  const datum = lastDays();
  const initial = datum.danasnjiDatum;
  const [active, setActive] = useState(true);
  const [date, setDate] = useState(false);
  const [tableDate, setTableDate] = useState(null);
  const [lastClickedIndex, setLastClickedIndex] = useState(1);
  const [action, setAction] = useState(initial);
  const today = datum.danasnjiDatum.split("-").slice(1).join("/");
  const data = [datum.prethodniDan, datum.danasnjiDatum, datum.nextDay];
  const loading = useSelector((state) => state.football.loadingLive);
  const { isDarkMode } = useDarkMode();
  const handleDatum = () => {
    setDate(!date);
  };
  const handlerDay = (datum, index) => {
    setLastClickedIndex(index);
    setTableDate(datum.split("-").slice(1).join("/"));
    setAction(datum);
    setDate(!date);
  };
  const handlePreviousDate = () => {
    if (lastClickedIndex > 0) {
      const previousIndex = lastClickedIndex - 1;
      handlerDay(data[previousIndex], previousIndex);
      setDate(false);
    }
  };

  const handleNextDate = () => {
    if (lastClickedIndex >= 0 && lastClickedIndex < 2) {
      const previousIndex = lastClickedIndex + 1;
      handlerDay(data[previousIndex], previousIndex);
      setDate(false);
    }
  };
  return (
    <section style={{ background: isDarkMode ? "#00141e" : "" }}>
      <div className={classes.mainButtonsWrapper}>
        <div className={classes.container}>
          <button
            className={active ? classes.active : ""}
            onClick={() => setActive(true)}
          >
            ALL
          </button>
          <button
            className={!active ? classes.active : ""}
            onClick={() => setActive(false)}
          >
            LIVE
          </button>
        </div>
        {active ? (
          <div className={classes.calendarWrapper}>
            {lastClickedIndex > 0 && (
              <button
                className={classes.buttonWrapper}
                disabled={loading}
                onClick={handlePreviousDate}
              >
                <KeyboardArrowLeftIcon />
              </button>
            )}
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={handleDatum}
            >
              <CalendarMonthIcon color="disabled" />
              <p style={{ cursor: "pointer" }}>
                {tableDate ? tableDate : today}
              </p>
            </div>
            {date ? (
              <ul className={classes.menu}>
                {data.map((item, index) => {
                  return (
                    <li key={index}>
                      <button
                        disabled={loading}
                        onClick={() => handlerDay(item, index)}
                        className={
                          lastClickedIndex === index ? classes.activeDatum : ""
                        }
                      >
                        {item.split("-").slice(1).join("/")}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
            {lastClickedIndex >= 0 && lastClickedIndex < 2 && (
              <button
                className={classes.buttonWrapper}
                disabled={loading}
                onClick={handleNextDate}
              >
                <KeyboardArrowRightIcon />
              </button>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      {active ? <AllMatches action={action} /> : <LiveMatch />}
    </section>
  );
};

export default LiveMatchTable;
