import React, { useEffect, useState } from "react";
import MatchDetail from "./MatchDetail";
import LineupsMatch from "../Lineups/LineupsMatch";
import StatsMatch from "../Stats/StatsMatch";
import classes from "./MatchTabs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLiveComments } from "../../app/footballSlice";
import LiveCommentary from "../LiveCommentary/LiveCommentary";
const MatchTabs = ({ item }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.getLiveComments);
  const [activeComponent, setActiveComponent] = useState(0);
  const options = ["Summary", "Stats", "Lineups", "COMMENTARY"];
  const changeComponent = (index) => {
    setActiveComponent(index);
  };

  useEffect(() => {
    dispatch(getLiveComments(item.match_id));
  }, [dispatch, item.match_id]);
  return (
    <>
      {item.match_status !== "" && (
        <div className={classes.buttonsWrapper}>
          {options?.map((el, index) => {
            if (index === 2 && !(item.lineup.home.starting_lineups.length > 0))
              return null;
            if (
              index === 3 &&
              !(selector[item.match_id]?.live_comments.length > 0)
            )
              return null;
            return (
              <button
                className={activeComponent === index ? classes.active : ""}
                key={index}
                onClick={() => changeComponent(index)}
              >
                {el}
              </button>
            );
          })}
        </div>
      )}

      {activeComponent === 0 && <MatchDetail item={item} />}
      {activeComponent === 1 && <StatsMatch statistics={item.statistics} />}
      {activeComponent === 2 && <LineupsMatch item={item} />}
      {activeComponent === 3 && (
        <LiveCommentary comments={selector[item.match_id]?.live_comments} />
      )}
    </>
  );
};

export default MatchTabs;
