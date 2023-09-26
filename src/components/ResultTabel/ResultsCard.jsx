import React from "react";
import { useSelector } from "react-redux";
import ResultTabel from "./ResultTabel";
import classes from "./ResultTabel.module.css";
const ResultsCard = () => {
  const selector = useSelector((state) => state.football.leagueResults);
  return (
    <>
      {selector.error === 404 ? (
        <p>No Data for This League</p>
      ) : (
        <>
          <section>
            <div className={classes.headerTittle}>
              <h1>Last Results</h1>
            </div>
            <div className={classes.countryWrapper}>
              <img
                src={
                  selector[0]?.country_logo
                    ? selector[0]?.country_logo
                    : "https://logowik.com/content/uploads/images/994_champions_league.jpg"
                }
                alt=""
              />
              <p>{selector[0]?.country_name}:</p>
              <p> {selector[0]?.league_name}</p>
            </div>
            {selector.length > 0 &&
              selector?.map((item) => {
                if (item.match_status.length > 0) {
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
                      key={item.match_id}
                    />
                  );
                }
                // Ako uslov nije ispunjen, vratite null kako biste preskočili ovu stavku
                return null;
              })}
          </section>
        </>
      )}
    </>
  );
};

export default ResultsCard;
