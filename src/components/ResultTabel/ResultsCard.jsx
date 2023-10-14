import React from "react";
import { useSelector } from "react-redux";
import ResultTabel from "./ResultTabel";
import classes from "./ResultTabel.module.css";
import ResultHeader from "./ResultHeader";
import { useEffect } from "react";
import { useDarkMode } from "../../context/DarkModeContext";
const ResultsCard = () => {
  const selector = useSelector((state) => state.football.leagueResults);
  const { isDarkMode } = useDarkMode();

  let sortedData;
  let sortedDataRound;
  let currentMatchRound;
  let previousMatchRound;

  if (selector?.length > 0) {
    sortedData = [...selector]?.sort((a, b) => {
      if (a.match_date < b.match_date) return -1;
      if (a.match_date > b.match_date) return 1;
      if (a.match_date === b.match_date) {
        if (a.match_time < b.match_time) return -1;
        if (a.match_time > b.match_time) return 1;
        return 0;
      }
    });
  }

  if (selector?.length > 0) {
    sortedDataRound = [...sortedData]?.sort((a, b) => {
      if (a.match_round < b.match_round) return 1;
      if (a.match_round > b.match_round) return -1;
    });
  }

  return (
    <>
      {selector?.error === 404 ? (
        <p>No Data for This League</p>
      ) : (
        <>
          <section style={{ background: isDarkMode ? "#00141e" : "" }}>
            <div className={classes.headerTittle}>
              <h1>Last Results</h1>
            </div>
            <ResultHeader item={selector[0]} />
            {selector?.length > 0 &&
              sortedDataRound?.map((item, index) => {
                if (item.match_status === "Finished") {
                  currentMatchRound = item.match_round;
                  if (currentMatchRound !== previousMatchRound) {
                    previousMatchRound = currentMatchRound;
                    return (
                      <React.Fragment key={item.match_round}>
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
                    return (
                      <React.Fragment key={`resault=${item.match_id}`}>
                        <ResultTabel key={item.match_id} item={item} />
                      </React.Fragment>
                    );
                  }
                }
                return null;
              })}
          </section>
        </>
      )}
    </>
  );
};

export default ResultsCard;
