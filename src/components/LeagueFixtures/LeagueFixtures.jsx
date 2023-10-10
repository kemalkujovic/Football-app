import React from "react";
import { useSelector } from "react-redux";
import ResultTabel from "../ResultTabel/ResultTabel";
import classes from "./LeagueFixtures.module.css";
import ResultHeader from "../ResultTabel/ResultHeader";
import { useDarkMode } from "../../context/DarkModeContext";
const LeagueFixtures = () => {
  const selector = useSelector((state) => state.football.fixtureMatches);
  let sortedData;
  const { isDarkMode } = useDarkMode();
  if (selector.length > 0) {
    sortedData = [...selector]?.sort((a, b) => {
      if (a.match_date < b.match_date) return -1;

      if (a.match_date > b.match_date) return 1;

      if (a.match_date == b.match_date) {
        if (a.match_time < b.match_time) return -1;

        if (a.match_time > b.match_time) return 1;

        return 0;
      }
    });
  }

  let currentMatchRound;
  let previousMatchRound;
  return (
    <div>
      {selector.error === 404 ? (
        "No matches found"
      ) : (
        <>
          <div className={classes.headerTittle}>
            <h1>Fixtures Matches</h1>
          </div>
          <ResultHeader item={selector[0]} />
          {selector.length > 0 &&
            sortedData?.map((item, index) => {
              if (item.match_status.length === 0) {
                currentMatchRound = item.match_round;
                if (currentMatchRound !== previousMatchRound) {
                  previousMatchRound = currentMatchRound;
                  return (
                    <React.Fragment key={index}>
                      <span
                        style={{
                          background: isDarkMode ? "#001e28" : "",
                          color: isDarkMode ? "white" : "",
                        }}
                        className={classes.roundWrapper}
                      >
                        ROUND {item.match_round}
                      </span>
                      <ResultTabel key={item.match_id} item={item} />
                    </React.Fragment>
                  );
                } else {
                  return <ResultTabel key={item.match_id} item={item} />;
                }
              }
            })}
        </>
      )}
    </div>
  );
};

export default LeagueFixtures;
