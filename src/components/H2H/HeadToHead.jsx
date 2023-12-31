import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import LastMatches from "./LastMatches";
import classes from "./HomeMatches.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getH2H } from "../../app/footballSlice";
import { useDarkMode } from "../../context/DarkModeContext";
const HeadToHead = ({ item }) => {
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.getH2H);
  const loading = useSelector((state) => state.football.loading);
  const [homeMore, setHomeMore] = useState(false);
  const [awayMore, setAwayMore] = useState(false);
  const firstTeamMatchs = selector["firstTeam_lastResults"];
  const lastFiveHomeMatches = firstTeamMatchs?.slice(0, 5);
  const moreFiveHomeMatches = firstTeamMatchs?.slice(5);
  const secondTeamMatchs = selector["secondTeam_lastResults"];
  const lastFiveAwayMatches = secondTeamMatchs?.slice(0, 5);
  const moreFiveAwayMatches = secondTeamMatchs?.slice(5);

  const headToHead = selector["firstTeam_VS_secondTeam"];

  useEffect(() => {
    const id = {
      homeId: item.match_hometeam_id,
      awayId: item.match_awayteam_id,
    };
    dispatch(getH2H(id));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className={classes.circularLoading}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div
            style={{ background: isDarkMode ? "#001e28" : "" }}
            className={classes.headerMatchWrapper}
          >
            Last Match: {item.match_hometeam_name}
          </div>
          {lastFiveHomeMatches?.map((item, index) => {
            return <LastMatches key={index} item={item} />;
          })}
          {!homeMore && moreFiveHomeMatches?.length > 0 ? (
            <div
              onClick={() => setHomeMore(!homeMore)}
              className={classes.loadMoreWrapper}
            >
              <span>Load More</span>
              <ExpandMoreIcon />
            </div>
          ) : (
            moreFiveHomeMatches?.map((item, index) => {
              return <LastMatches key={index} item={item} />;
            })
          )}

          <div
            style={{ background: isDarkMode ? "#001e28" : "" }}
            className={classes.headerMatchWrapper}
          >
            Last Match: {item.match_awayteam_name}
          </div>
          {lastFiveAwayMatches?.map((item, index) => {
            return <LastMatches key={index} item={item} />;
          })}
          {!awayMore && moreFiveAwayMatches?.length > 0 ? (
            <div
              onClick={() => setAwayMore(!awayMore)}
              className={classes.loadMoreWrapper}
            >
              <span>Load More</span>
              <ExpandMoreIcon />
            </div>
          ) : (
            moreFiveAwayMatches?.map((item, index) => {
              return <LastMatches key={index} item={item} />;
            })
          )}
          <div
            style={{ background: isDarkMode ? "#001e28" : "" }}
            className={classes.headerMatchWrapper}
          >
            HEAD-TO-HEAD MATCHES
          </div>
          {headToHead?.map((item, index) => {
            return <LastMatches key={index} item={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default HeadToHead;
