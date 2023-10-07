import React, { useContext, useEffect, useState } from "react";
import ResultTabel from "../ResultTabel/ResultTabel";
import { FavoriteMatchContext } from "../../context/FavoriteMatchContext";
import classes from "./FavoriteMatch.module.css";
import { getLiveMatch } from "../../app/footballSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultHeader from "../ResultTabel/ResultHeader";
import { FavoriteContext } from "../../context/FavoriteContext";

const FavoriteMatch = () => {
  const { matchFavorit } = useContext(FavoriteMatchContext);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.liveMatch);
  const { updateMatchInLocalStorage } = useContext(FavoriteMatchContext);
  const { addFavorite, removeFavorite } = useContext(FavoriteContext);
  const [previousScores, setPreviousScores] = useState({});
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
            setPreviousScores((prevScores) => ({
              ...prevScores,
              [el.match_id]: {
                hometeam_score: el.match_hometeam_score,
                awayteam_score: el.match_awayteam_score,
                match_id: el.match_id,
              },
            }));
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
  }, [dispatch, selector]);
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
                <ResultHeader previousScores={previousScores} item={item} />
                <ResultTabel key={item.match_id} item={item} />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <ResultTabel
                  previousScores={previousScores}
                  key={index}
                  item={item}
                />
              </React.Fragment>
            );
          }
        })}
    </section>
  );
};

export default FavoriteMatch;
