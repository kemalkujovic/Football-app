import React from "react";
import classes from "./MatchOdds.module.css";
import { useSelector } from "react-redux";
const MatchOdds = () => {
  const data = useSelector((state) => state.football.getOddsMatch);
  const bet365Data = data?.filter((el) => el.odd_bookmakers === "bet365");
  return (
    <div className={classes.container}>
      <div>
        <img
          src="https://static.flashscore.com/res/image/data/bookmakers/80-16.png"
          alt="Bet 365"
        />
      </div>
      <div className={classes.oddsWrapper}>
        <div>
          <span>1</span>
          <p>{bet365Data[0]?.odd_1}</p>
        </div>
        <div>
          <span>X</span>
          <p>{bet365Data[0]?.odd_x}</p>
        </div>
        <div>
          <span>2</span>
          <p>{bet365Data[0]?.odd_2}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchOdds;
