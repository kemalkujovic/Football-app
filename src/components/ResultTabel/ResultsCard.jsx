import React from "react";
import { useSelector } from "react-redux";
import ResultTabel from "./ResultTabel";
import classes from "./ResultTabel.module.css";
const ResultsCard = () => {
  const selector = useSelector((state) => state.football.leagueResults);
  console.log(selector);
  return (
    <>
      <div className={classes.countryWrapper}>
        <img src={selector[0]?.country_logo} alt="" />
        <p> {selector[0]?.league_name}</p>
      </div>
      {selector.length > 0 &&
        selector?.map((item) => {
          return (
            <ResultTabel
              matchDate={item.match_date}
              matchTime={item.match_time}
              homeLogo={item.team_home_badge}
              awayLogo={item.team_away_badge}
              league_logo={item.league_logo}
              homeName={item.match_hometeam_name}
              awayName={item.match_awayteam_name}
              homeGoal={item.match_hometeam_score}
              awayGoal={item.match_awayteam_score}
              homeHalfGoal={item.match_hometeam_halftime_score}
              awayHalfGoal={item.match_awayteam_halftime_score}
              leagueName={item.league_name}
              countryLogo={item.country_logo}
            />
          );
        })}
    </>
  );
};

export default ResultsCard;
