import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlayer } from "../../app/footballSlice";
import classes from "./PlayerStats.module.css";
import { useDarkMode } from "../../context/DarkModeContext";

const PlayerStats = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkMode();
  useEffect(() => {
    dispatch(getPlayer(id));
  }, [dispatch, id]);

  const selector = useSelector((state) => state.football.getPlayer);
  const data = selector.find((item) => item.player_id === item.player_id);
  return (
    <>
      {data ? (
        <section style={{ background: isDarkMode ? "#00141e" : "" }}>
          <div
            className={`${classes.searchWrapper} ${
              isDarkMode ? classes.darkSearchWrapper : ""
            }`}
          >
            <img
              src={data.player_image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://apiv3.apifootball.com/badges/players/97489_t-messing.jpg";
              }}
              alt="Player"
              loading="lazy"
            />
            <div>
              <h3>{data.player_name}</h3>
              <div className={classes.playerWrapper}>
                <span>{data.player_type}</span>
                <p>({data.team_name})</p>
              </div>
              <div className={classes.playerWrapper}>
                <span>Age:</span>
                <p>{data.player_age}</p>
                <p>({data.player_birthdate})</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default PlayerStats;
