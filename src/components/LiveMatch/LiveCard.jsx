import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLiveMatch } from "../../app/footballSlice";
import ResultTabel from "../ResultTabel/ResultTabel";
import classes from "./LiveCard.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResultHeader from "../ResultTabel/ResultHeader";
const LiveCard = () => {
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.liveMatch);

  let updatedLeagues = [];
  let currentLeague;
  let previusLeague;

  function prioritizeFavoriteLeague() {
    const favorites = JSON.parse(localStorage.getItem("league")) || [];

    const index = selector?.filter((favorite) =>
      favorites?.some((item) => favorite.league_id === item.league_id)
    );
    const nonPrioritizedLeagues = selector?.filter(
      (item) =>
        !favorites?.some((favorite) => favorite.league_id === item.league_id)
    );

    updatedLeagues = [...index, ...nonPrioritizedLeagues];
  }
  prioritizeFavoriteLeague();
  const data = updatedLeagues.slice(0, 100);
  const moreDate = updatedLeagues.slice(100);
  useEffect(() => {
    const fetchData = () => {
      dispatch(getLiveMatch());
    };
    const intervalId = setInterval(fetchData, 10000);
    fetchData();

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  return (
    <div>
      {data.length > 0 &&
        data?.map((item, index) => {
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
                  key={item.match_id}
                  item={item}
                  matchLive={item.match_live}
                />
              </React.Fragment>
            );
          }
        })}
      {!more && moreDate.length > 0 ? (
        <div className={classes.loadMoreWrapper} onClick={() => setMore(!more)}>
          <span>Load More</span>
          <ExpandMoreIcon />
        </div>
      ) : (
        ""
      )}
      {more
        ? moreDate.length > 0 &&
          moreDate?.map((item, index) => {
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
                    key={item.match_id}
                    item={item}
                    matchLive={item.match_live}
                  />
                </React.Fragment>
              );
            }
          })
        : ""}
    </div>
  );
};

export default LiveCard;
