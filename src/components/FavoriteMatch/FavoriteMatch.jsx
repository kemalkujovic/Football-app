import React, { useContext } from "react";
import ResultTabel from "../ResultTabel/ResultTabel";
import { FavoriteMatchContext } from "../../context/FavoriteMatchContext";
import classes from "./FavoriteMatch.module.css";
const FavoriteMatch = () => {
  const { matchFavorit } = useContext(FavoriteMatchContext);
  return (
    <section>
      {matchFavorit.length > 0 &&
        matchFavorit?.map((item, index) => {
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
              matchStatus={item.match_status}
              key={index}
              item={item}
              matchLive={item.match_live}
            />
          );
        })}
    </section>
  );
};

export default FavoriteMatch;
