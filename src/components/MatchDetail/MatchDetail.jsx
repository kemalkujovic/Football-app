import React from "react";
import classes from "./MatchDetail.module.css";

import Detail from "./Detail";
const MatchDetail = ({ item }) => {
  let matchData = [];
  let substitutions = item.substitutions;
  if (item.cards && item.goalscorer) {
    matchData = [...item.cards, ...item.goalscorer].sort((a, b) => {
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
  console.log(matchData.concat(substitutions));
  const firstHalfData = matchData.filter(
    (item) => item.score_info_time === "1st Half"
  );
  const secondHalfData = matchData.filter(
    (item) => item.score_info_time === "2nd Half"
  );
  console.log(substitutions);
  return (
    <>
      <div>
        <div className={classes.halfWrapper}>
          <p>1 POLUVREME</p>
          <p></p>
        </div>
        {firstHalfData?.map((item, index) => {
          return (
            <Detail substitutions={substitutions} key={index} item={item} />
          );
        })}
      </div>
      <div>
        <div className={classes.halfWrapper}>
          <p>2 POLUVREME</p>
        </div>
        {secondHalfData?.map((item, index) => {
          return (
            <Detail substitutions={substitutions} key={index} item={item} />
          );
        })}
      </div>
    </>
  );
};

export default MatchDetail;
