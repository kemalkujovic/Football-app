import React from "react";
import classes from "./Stats.module.css";
import MatchOdds from "../MatchDetail/MatchOdds";
import { useDarkMode } from "../../context/DarkModeContext";
const StatsMatch = ({ statistics }) => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      {statistics.length > 0 ? (
        <div className={classes.statsWrapper}>
          {statistics?.map((statistic, index) => {
            if (+statistic.home === 0 && +statistic.away === 0) return;
            let homePercentage = 0;
            let awayPercentage = 0;
            if (statistic.home !== undefined && statistic.away !== undefined) {
              const homePenalties = parseFloat(statistic.home);
              const awayPenalties = parseFloat(statistic.away);

              if (!isNaN(homePenalties) && !isNaN(awayPenalties)) {
                homePercentage = Math.round(
                  (homePenalties / (homePenalties + awayPenalties)) * 100
                );
                awayPercentage = Math.round(
                  (awayPenalties / (homePenalties + awayPenalties)) * 100
                );
              }
            }

            return (
              <div key={index} className={classes.container}>
                <div className={classes.mainContainer}>
                  <div className={classes.statsGraph}>{statistic.home}</div>
                  <div>{statistic.type}</div>
                  <div className={classes.statsGraph}>{statistic.away}</div>
                </div>
                <div className={classes.chart}>
                  <div
                    className={
                      isDarkMode ? classes.darkHomeChart : classes.homeChart
                    }
                  >
                    <div
                      style={{
                        width: homePercentage + "%",
                        backgroundColor: isDarkMode
                          ? homePercentage > awayPercentage
                            ? "#ff0046"
                            : "#fff"
                          : homePercentage > awayPercentage
                          ? "#ff0046"
                          : "#001e28",
                      }}
                      className={classes.homeBackgroundChart}
                    ></div>
                  </div>
                  <div
                    className={
                      isDarkMode ? classes.darkAwayChart : classes.awayChart
                    }
                  >
                    <div
                      style={{
                        width: awayPercentage + "%",
                        backgroundColor: isDarkMode
                          ? awayPercentage > homePercentage
                            ? "#ff0046" // Postavite boju za tamni režim i kada je uslov tačan
                            : "#fff" // Postavite boju za tamni režim i kada je uslov netačan
                          : awayPercentage > homePercentage
                          ? "#ff0046" // Postavite boju za svetli režim i kada je uslov tačan
                          : "#001e28", // Postavite boju za svetli režim i kada je uslov netačan
                      }}
                      className={classes.awayBackgroundChart}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className={
              isDarkMode ? classes.darkHalfWrapper : classes.halfWrapper
            }
          >
            <p>PRE-MATCH ODDS</p>
          </div>
          <div>
            <MatchOdds />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default StatsMatch;
