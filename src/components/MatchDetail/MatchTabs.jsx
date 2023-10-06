import React, { useState } from "react";
import MatchDetail from "./MatchDetail";
import LineupsMatch from "../Lineups/LineupsMatch";
import StatsMatch from "../Stats/StatsMatch";
import classes from "./MatchTabs.module.css";
const MatchTabs = ({ item }) => {
  const [activeComponent, setActiveComponent] = useState(0);
  const options = ["Summary", "Stats", "Lineups"];
  const changeComponent = (index) => {
    setActiveComponent(index);
  };
  return (
    <>
      {item.match_status !== "" && (
        <div className={classes.buttonsWrapper}>
          {options?.map((el, index) => {
            if (index === 2 && !(item.lineup.home.starting_lineups.length > 0))
              return null;
            return (
              <button
                className={activeComponent === index ? classes.active : ""}
                key={index}
                onClick={() => changeComponent(index)}
              >
                {el}
              </button>
            );
          })}
        </div>
      )}

      {activeComponent === 0 && <MatchDetail item={item} />}
      {activeComponent === 1 && <StatsMatch item={item} />}
      {activeComponent === 2 && <LineupsMatch item={item} />}
    </>
  );
};

export default MatchTabs;
