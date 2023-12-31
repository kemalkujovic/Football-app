import React, { useContext, useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../Templates/Sidebar/Sidebar";
import classes from "./HomePage.module.css";
import FavoriteCard from "../components/FavoriteMatch/FavoriteCard";
import AudioGoal from "../assets/sound/8d82b5_Soccer_Goal_Sound_Effect.mp3";
import { FavoriteMatchContext } from "../context/FavoriteMatchContext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { Tooltip } from "@mui/material";
import { useDarkMode } from "../context/DarkModeContext";
const FavoritePage = () => {
  const [sound, setSound] = useState(true);
  const { goal, setGoal } = useContext(FavoriteMatchContext);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (goal && sound) {
      const audioElement = document.getElementById("soundGoal");
      if (audioElement) {
        audioElement.play().catch((error) => {
          console.error("No sound", error);
        });
        setGoal(false);
      }
    }
  }, [goal, sound]);

  return (
    <>
      <div>
        <div className={classes.soundWrapper}>
          {sound ? (
            <Tooltip title="Turn off sound" arrow>
              <div>
                <VolumeUpIcon
                  style={{ color: isDarkMode ? "white" : "" }}
                  onClick={() => setSound(!sound)}
                />
              </div>
            </Tooltip>
          ) : (
            <Tooltip title="Turn on sound" arrow>
              <div>
                <VolumeOffIcon
                  style={{ color: isDarkMode ? "white" : "" }}
                  onClick={() => setSound(!sound)}
                />
              </div>
            </Tooltip>
          )}
          <audio id="soundGoal" src={AudioGoal} />
        </div>
        <Grid lg={12} item container direction="row">
          <Grid
            lg={2}
            md={3}
            sm={3}
            item
            className={classes.responsiveContainer}
          >
            <Sidebar />
          </Grid>
          <Grid
            lg={10}
            md={9}
            sm={9}
            xs={12}
            item
            className={classes.responsiveLayout}
          >
            <FavoriteCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FavoritePage;
