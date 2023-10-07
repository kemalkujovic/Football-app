import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLiveMatch } from "../../app/footballSlice";
import ResultTabel from "../ResultTabel/ResultTabel";
import classes from "./LiveCard.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResultHeader from "../ResultTabel/ResultHeader";
import { FavoriteContext } from "../../context/FavoriteContext";
const LiveCard = () => {
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.liveMatch);
  const { addFavorite, removeFavorite } = useContext(FavoriteContext);
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
    const intervalId = setInterval(fetchData, 60000);
    fetchData();

    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, addFavorite]);

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
                <ResultTabel key={item.match_id} item={item} />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <ResultTabel key={item.match_id} item={item} />
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
                  <ResultTabel key={item.match_id} item={item} />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  <ResultTabel key={item.match_id} item={item} />
                </React.Fragment>
              );
            }
          })
        : ""}
    </div>
  );
};

export default LiveCard;
