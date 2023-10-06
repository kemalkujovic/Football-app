import React from "react";
import classes from "./LineupCard.module.css";
const LineupCard = ({ item, away }) => {
  return (
    <div className={away ? classes.rightSideLineups : classes.leftSideLineups}>
      <p>{away ? item.lineup_player : item.lineup_number}</p>
      <p>{away ? item.lineup_number : item.lineup_player}</p>
    </div>
  );
};

export default LineupCard;
