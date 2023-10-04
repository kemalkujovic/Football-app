import React from "react";
import classes from "./MatchDetail.module.css";

import Detail from "./Detail";
import MatchInfromation from "../MatchInfromation/MatchInfromation";
import MatchOdds from "./MatchOdds";
import { useSelector } from "react-redux";
const MatchDetail = ({ item }) => {
  let matchData = [];
  let substitutions = item.substitutions;
  const selector = useSelector((state) => state.football.getOddsMatch);

  if (item.cards && item.goalscorer) {
    matchData = [...item.cards, ...item.goalscorer]
      .map((detail) => ({
        ...detail,
      }))
      .concat(
        substitutions.home.map((substitution) => ({
          ...substitution,
          team: "home",
        }))
      )
      .concat(
        substitutions.away.map((substitution) => ({
          ...substitution,
          team: "away",
        }))
      )
      .sort((a, b) => {
        const parseTime = (timeString) => {
          if (timeString.includes("+")) {
            const [minutes, extraMinutes] = timeString.split("+").map(Number);
            return minutes + extraMinutes;
          } else {
            return parseInt(timeString, 10);
          }
        };

        const timeA = parseTime(a.time);
        const timeB = parseTime(b.time);
        return timeA - timeB;
      });
  }
  const determineHalf = (timeString) => {
    const time = parseInt(timeString, 10);
    if (time <= 45 || timeString.includes("45+")) {
      return "1st Half";
    } else if (time <= 90 || timeString.includes("90+")) {
      return "2nd Half";
    } else {
      return "Extra Time";
    }
  };

  const firstHalfData = matchData.filter(
    (item) => determineHalf(item.time) === "1st Half"
  );

  const secondHalfData = matchData.filter(
    (item) => determineHalf(item.time) === "2nd Half"
  );
  return (
    <>
      {(firstHalfData.length > 0 || item.match_live === "1") && (
        <div>
          <div className={classes.halfWrapper}>
            <p>1. HALF</p>
            <p></p>
          </div>
          {firstHalfData?.map((item, index) => {
            return (
              <Detail substitutions={substitutions} key={index} item={item} />
            );
          })}
        </div>
      )}
      {secondHalfData.length > 0 && (
        <div>
          <div className={classes.halfWrapper}>
            <p>2. HALF</p>
          </div>
          {secondHalfData?.map((item, index) => {
            return (
              <Detail substitutions={substitutions} key={index} item={item} />
            );
          })}
        </div>
      )}
      {selector.length > 0 && (
        <div>
          <div className={classes.halfWrapper}>
            <p>PRE-MATCH ODDS</p>
          </div>
          <MatchOdds data={selector} />
        </div>
      )}
      {
        <div>
          <div className={classes.halfWrapper}>
            <p>MATCH INFORMATION</p>
          </div>
          <MatchInfromation item={item} />
        </div>
      }
    </>
  );
};

export default MatchDetail;
