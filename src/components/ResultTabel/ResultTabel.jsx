import React, { useContext, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Tooltip from "@mui/material/Tooltip";
import { FavoriteMatchContext } from "../../context/FavoriteMatchContext.js";
import classes from "./ResultTabel.module.css";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
const ResultTabel = (props) => {
  const { addFavorite, removeFavorite } = useContext(FavoriteMatchContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const history = useNavigate();

  const { item, previousScores } = props;
  let klasa;
  let klasa2;

  if (previousScores) {
    const previousScore = previousScores[item?.match_id];
    const isScoreChanged =
      previousScore &&
      previousScore.hometeam_score !== item.match_hometeam_score;
    const isAwayScoreChanged =
      previousScore &&
      previousScore.awayteam_score !== item.match_awayteam_score;
    klasa = isScoreChanged ? classes.goalSouder : "";
    klasa2 = isAwayScoreChanged ? classes.goalSouder : "";
  }
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const homeRedCard = item.cards?.filter((item) => {
    return item.home_fault.length > 0 && item.card === "red card";
  });
  const awayRedCard = item.cards?.filter((item) => {
    return item.away_fault.length > 0 && item.card === "red card";
  });

  const openPopup = () => {
    const url = `/statistics/${item.match_id}`;
    const windowName = "Popup";
    const windowFeatures = "width=650,height=850";

    window.open(url, windowName, windowFeatures);
  };
  const handleContainerClick = (event) => {
    const isIconClick = event.target.closest(`.${classes.starWrapper}`);
    if (!isIconClick && windowWidth > 768) {
      openPopup();
    }
    if (!isIconClick && windowWidth < 768) {
      const url = `/statistics/${item.match_id}`;
      history(url);
    }
  };

  useEffect(() => {
    const matchData = JSON.parse(localStorage.getItem("match"));
    const data = matchData?.some((el) => el.match_id === item.match_id);
    setIsFavorite(data);
  }, []);

  const toggleFavorite = (item) => {
    if (isFavorite) {
      removeFavorite(item);
      setIsFavorite(false);
      setSnackbarMessage("Removed from Favorites.");
    } else {
      addFavorite(item);
      setIsFavorite(true);
      setSnackbarMessage("Added to Favorites.");
    }
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div
      onClick={(e) => handleContainerClick(e)}
      className={klasa ? klasa : klasa2 ? klasa2 : classes.mainContainer}
    >
      <Grid
        marginLeft="20px"
        width="75%"
        container
        item
        justifyContent="space-between"
        className={classes.responsiveContainer}
      >
        <div className={classes.timeLogoWrapper}>
          <div className={classes.timeZoneWrapper}>
            {isFavorite ? (
              <Tooltip title="Remove from Favorites" arrow>
                <div className={classes.starWrapper}>
                  <StarIcon
                    style={{ color: "#ffcd00" }}
                    onClick={() => {
                      toggleFavorite(item);
                    }}
                  />
                </div>
              </Tooltip>
            ) : (
              <div>
                <Tooltip title="Add to Favorites" arrow>
                  <div className={classes.starWrapper}>
                    <StarBorderIcon
                      onClick={() => {
                        toggleFavorite(item);
                      }}
                    />
                  </div>
                </Tooltip>
              </div>
            )}
            {item.match_live === "1" && item.match_status === "Finished" ? (
              <p className={classes.finishedStatus}>{item.match_status}</p>
            ) : item.match_status === "Half Time" ? (
              <p className={classes.wrapperStatusLive}>{item.match_status}</p>
            ) : item.match_live === "1" ? (
              <p className={classes.wrapperStatusLive}>{item.match_status}'</p>
            ) : (
              <div>
                <p>{item.match_date?.split("-").slice(1).join(".")}</p>
                <p>{item.match_time}</p>
              </div>
            )}
          </div>
          <div className={classes.clubsWrapper}>
            <span>
              <img
                src={
                  item.team_home_badge
                    ? item.team_home_badge
                    : item.country_logo
                }
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.country_logo;
                }}
                loading="lazy"
                alt="Logo1"
              />
              {item.match_live === "1" && item.match_status !== "Finished" ? (
                <>
                  <p className={klasa ? classes.goalSound : ""}>
                    {item.match_hometeam_name}
                  </p>
                  {klasa ? <p style={{ color: "#ff004c" }}>GOAL</p> : ""}
                  {homeRedCard.length > 0 ? (
                    <div className={classes.redCard}></div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  <p
                    className={
                      item.match_hometeam_score > item.match_awayteam_score
                        ? classes.winner
                        : ""
                    }
                  >
                    {item.match_hometeam_name}
                  </p>
                  {homeRedCard.length > 0 ? (
                    <div className={classes.redCard}></div>
                  ) : (
                    ""
                  )}
                </>
              )}
            </span>
            <span>
              <img
                src={
                  item.team_away_badge
                    ? item.team_away_badge
                    : item.country_logo
                }
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = item.country_logo;
                }}
                loading="lazy"
                alt="Logo1"
              />
              {item.match_live === "1" && item.match_status !== "Finished" ? (
                <>
                  <p className={klasa2 ? classes.goalSound : ""}>
                    {item.match_awayteam_name}
                  </p>
                  {klasa2 ? <p style={{ color: "#ff004c" }}>GOAL</p> : ""}
                  {awayRedCard.length > 0 ? (
                    <div className={classes.redCard}></div>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  <p
                    className={
                      item.match_awayteam_score > item.match_hometeam_score
                        ? classes.winner
                        : ""
                    }
                  >
                    {item.match_awayteam_name}
                  </p>
                  {awayRedCard.length > 0 ? (
                    <div className={classes.redCard}></div>
                  ) : (
                    ""
                  )}
                </>
              )}
            </span>
          </div>
        </div>
        <div className={classes.resultLiveWrapper}>
          <div className={classes.finalResult}>
            {item.match_live === "1" && item.match_status !== "Finished" ? (
              <>
                {item.match_status !== "Half Time" ? (
                  <p className={classes.matchStatusRes}>{item.match_status}'</p>
                ) : (
                  <p className={classes.matchStatusRes}>
                    {item.match_status.split(" ").map((word) => word.charAt(0))}
                  </p>
                )}
                <div>
                  <span>
                    <p className={classes.wrapperScoreLive}>
                      {item.match_hometeam_score}
                    </p>
                  </span>
                  <span>
                    <p className={classes.wrapperScoreLive}>
                      {item.match_awayteam_score}
                    </p>
                  </span>
                </div>
              </>
            ) : item.match_hometeam_score?.length > 0 ? (
              <span>
                <p>{item.match_hometeam_score}</p>
                <p>{item.match_awayteam_score}</p>
              </span>
            ) : (
              <span>
                <p>-</p>
                <p>-</p>
              </span>
            )}
          </div>
          <div>
            {item.match_hometeam_halftime_score?.length > 0 ? (
              <span>
                <p>({item.match_hometeam_halftime_score})</p>
                <p>({item.match_awayteam_halftime_score})</p>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <Snackbar
          className={classes.snackbarWrapper}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={openSnackbar}
          onClose={handleCloseSnackbar}
          autoHideDuration={1500}
          message={snackbarMessage}
        />
      </Grid>
    </div>
  );
};

export default ResultTabel;
