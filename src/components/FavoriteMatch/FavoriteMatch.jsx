import React, { useContext } from "react";
import ResultTabel from "../ResultTabel/ResultTabel";
import { FavoriteMatchContext } from "../../context/FavoriteMatchContext";
import classes from "./FavoriteMatch.module.css";
const FavoriteMatch = () => {
  const { matchFavorit } = useContext(FavoriteMatchContext);
  let currentLeague;
  let previusLeague;
  return (
    <section>
      {matchFavorit.length > 0 &&
        matchFavorit?.map((item, index) => {
          currentLeague = item.league_name;
          if (currentLeague !== previusLeague) {
            previusLeague = currentLeague;
            return (
              <>
                <div className={classes.countryWrapper}>
                  <img
                    src={
                      item.country_logo
                        ? item.country_logo
                        : "https://logowik.com/content/uploads/images/994_champions_league.jpg"
                    }
                    alt="Logo"
                  />
                  <p>{item?.country_name}:</p>
                  <p> {item?.league_name}</p>
                </div>
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
              </>
            );
          } else {
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
          }
        })}
    </section>
  );
};

export default FavoriteMatch;
