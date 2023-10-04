import React, { useContext, useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Tooltip from "@mui/material/Tooltip";
import { FavoriteMatchContext } from "../../context/FavoriteMatchContext.js";
import classes from "./ResultTabel.module.css";
import { Grid } from "@mui/material";
const ResultTabel = (props) => {
  const { addFavorite, removeFavorite } = useContext(FavoriteMatchContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const {
    countryLogo,
    matchDate,
    matchTime,
    matchStatus,
    homeLogo,
    awayLogo,
    homeName,
    awayName,
    homeGoal,
    awayGoal,
    homeHalfGoal,
    awayHalfGoal,
    item,
    matchLive,
  } = props;

  const openPopup = () => {
    const url = `http://localhost:3000/statistics/${item.match_id}`;
    const windowName = "Popup";
    const windowFeatures = "width=600,height=800";

    window.open(url, windowName, windowFeatures);
  };

  const handleContainerClick = (event) => {
    const isIconClick = event.target.closest(`.${classes.starWrapper}`);
    if (!isIconClick) {
      openPopup();
    }
  };

  useEffect(() => {
    const matchData = JSON.parse(localStorage.getItem("match"));
    const data = matchData?.some((el) => el.match_id === item.match_id);
    setIsFavorite(data);
  }, [item]);

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
      className={classes.mainContainer}
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
            {matchLive === "1" && matchStatus === "Finished" ? (
              <p style={{ margin: "auto" }}>{matchStatus}</p>
            ) : matchStatus === "Half Time" ? (
              <p className={classes.wrapperStatusLive}>{matchStatus}</p>
            ) : matchLive === "1" ? (
              <p className={classes.wrapperStatusLive}>{matchStatus}'</p>
            ) : (
              <div>
                <p>{matchDate?.split("-").slice(1).join(".")}</p>
                <p>{matchTime}</p>
              </div>
            )}
          </div>
          <div className={classes.clubsWrapper}>
            <span>
              <img
                src={homeLogo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = countryLogo;
                }}
                alt="Logo1"
              />
              {matchLive === "1" && matchStatus !== "Finished" ? (
                <p>{homeName}</p>
              ) : (
                <p className={homeGoal > awayGoal ? classes.winner : ""}>
                  {homeName}
                </p>
              )}
            </span>
            <span>
              <img
                src={awayLogo}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = countryLogo;
                }}
                alt="Logo1"
              />
              {matchLive === "1" && matchStatus !== "Finished" ? (
                <p>{awayName}</p>
              ) : (
                <p className={awayGoal > homeGoal ? classes.winner : ""}>
                  {awayName}
                </p>
              )}
            </span>
          </div>
        </div>
        <div className={classes.resultsWrapper}>
          <div className={classes.finalResult}>
            {matchLive === "1" && matchStatus !== "Finished" ? (
              <span>
                <p className={classes.wrapperStatusLive}>{homeGoal}</p>
                <p className={classes.wrapperStatusLive}>{awayGoal}</p>
              </span>
            ) : homeGoal?.length > 0 ? (
              <span>
                <p>{homeGoal}</p>
                <p>{awayGoal}</p>
              </span>
            ) : (
              <span>
                <p>-</p>
                <p>-</p>
              </span>
            )}
          </div>
          <div>
            {homeHalfGoal?.length > 0 ? (
              <span>
                <p>({homeHalfGoal})</p>
                <p>({awayHalfGoal})</p>
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
