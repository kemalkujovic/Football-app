import React, { useContext, useEffect } from "react";
import ResultTabel from "../ResultTabel/ResultTabel";
import { FavoriteMatchContext } from "../../context/FavoriteMatchContext";
import classes from "./FavoriteMatch.module.css";
import { getLiveMatch } from "../../app/footballSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultHeader from "../ResultTabel/ResultHeader";

const FavoriteMatch = () => {
  const { matchFavorit } = useContext(FavoriteMatchContext);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.liveMatch);
  const { updateMatchInLocalStorage } = useContext(FavoriteMatchContext);

  useEffect(() => {
    const updateSelectorAndDispatch = () => {
      dispatch(getLiveMatch());
    };
    const intervalId = setInterval(updateSelectorAndDispatch, 30000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    const matchData = JSON.parse(localStorage.getItem("match"));

    const intervalId = setInterval(() => {
      const fuad = matchData.filter((el) =>
        selector?.filter((item) => {
          if (
            (el.match_id === item.match_id &&
              el.match_status !== item.match_status) ||
            el.match_hometeam_score !== item.match_hometeam_score ||
            el.match_awayteam_score !== item.match_awayteam_score
          ) {
            updateMatchInLocalStorage(
              item.match_id,
              item.match_status,
              item.match_hometeam_score,
              item.match_awayteam_score
            );
          }
        })
      );
    }, 15000); // 15 sekundi

    return () => clearInterval(intervalId);
  }, [selector]);

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
              <React.Fragment key={item.match_id}>
                <ResultHeader item={item} />
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
                  key={item.match_id}
                  item={item}
                  matchLive={item.match_live}
                />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
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
              </React.Fragment>
            );
          }
        })}
    </section>
  );
};

export default FavoriteMatch;
