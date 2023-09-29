import React from "react";
import { useSelector } from "react-redux";
import ResultTabel from "../ResultTabel/ResultTabel";
import classes from "./LeagueFixtures.module.css";
const LeagueFixtures = () => {
  const selector = useSelector((state) => state.football.fixtureMatches);
  let sortedData;

  if (selector.length > 0) {
    sortedData = [...selector]?.sort((a, b) => {
      if (a.match_date < b.match_date) return -1;

      if (a.match_date > b.match_date) return 1;

      if (a.match_date == b.match_date) {
        if (a.match_time < b.match_time) return -1;

        if (a.match_time > b.match_time) return 1;

        return 0;
      }
    });
  }

  let currentMatchRound;
  let previousMatchRound;
  return (
    <div>
      {selector.error === 404 ? (
        "No matches found"
      ) : (
        <>
          <div className={classes.headerTittle}>
            <h1>Fixtures Matches</h1>
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
            sortedData?.map((item, index) => {
              if (item.match_status.length === 0) {
                currentMatchRound = item.match_round;
                if (currentMatchRound !== previousMatchRound) {
                  previousMatchRound = currentMatchRound;
                  return (
                    <React.Fragment key={index}>
                      <span className={classes.roundWrapper}>
                        {item.match_round}. KOLO
                      </span>
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
                        key={item.match_id}
                      />
                    </React.Fragment>
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
                      key={item.match_id}
                    />
                  );
                }
              }
            })}
        </>
      )}
    </div>
  );
};

export default LeagueFixtures;
