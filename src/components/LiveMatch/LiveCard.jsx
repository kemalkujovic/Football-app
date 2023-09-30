import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLiveMatch } from "../../app/footballSlice";
import ResultTabel from "../ResultTabel/ResultTabel";
import classes from "./LiveCard.module.css";
const LiveCard = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.liveMatch);
  const data = selector
    .slice(0, 100)
    .filter((el) => el.match_status !== "Finished");

  useEffect(() => {
    const fetchData = () => {
      dispatch(getLiveMatch());
    };
    const intervalId = setInterval(fetchData, 60000);
    fetchData();

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);
  let currentLeague;
  let previusLeague;

  return (
    <div>
      {data?.map((item, index) => {
        currentLeague = item.league_name;
        if (currentLeague !== previusLeague) {
          previusLeague = currentLeague;
          return (
            <React.Fragment key={item.match_id}>
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
    </div>
  );
};

export default LiveCard;
