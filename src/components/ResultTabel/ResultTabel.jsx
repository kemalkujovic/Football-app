import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import classes from "./ResultTabel.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Tooltip } from "@mui/material";
import { FavoriteMatchContext } from "../../context/FavoriteMatchContext.js";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
const ResultTabel = (props) => {
  const { addFavorite, removeFavorite } = useContext(FavoriteMatchContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState(false);
  const [transition, setTransition] = React.useState(undefined);
  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

  const handleClick = () => {
    setSelectedElement(true);
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setSelectedElement(false);
  };

  const {
    countryLogo,
    matchDate,
    matchTime,
    homeLogo,
    awayLogo,
    homeName,
    awayName,
    homeGoal,
    awayGoal,
    homeHalfGoal,
    awayHalfGoal,
    item,
  } = props;

  useEffect(() => {
    const matchData = JSON.parse(localStorage.getItem("match"));
    const data = matchData?.some((el) => el.match_id === item.match_id);
    setIsFavorite(data);
  }, [item]);

  const toggleFavorite = (item) => {
    if (isFavorite) {
      removeFavorite(item);
      setIsFavorite(false);
    } else {
      addFavorite(item);
      setIsFavorite(true);
    }
  };
  return (
    <div className={classes.mainContainer}>
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
                <div
                  onClick={() => handleClick()}
                  className={classes.starWrapper}
                >
                  <StarIcon
                    style={{ color: "#ffcd00" }}
                    onClick={() => toggleFavorite(item)}
                  />
                  <Snackbar
                    className={classes.snackbarWrapper}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    onClose={handleClose}
                    open={open}
                    autoHideDuration={1000}
                    message="Add from Favorite"
                    TransitionComponent={TransitionUp}
                  />
                </div>
              </Tooltip>
            ) : (
              <div>
                <Tooltip title="Add to Favorites" arrow>
                  <StarBorderIcon
                    onClick={() => {
                      toggleFavorite(item);
                      handleClick();
                    }}
                  />
                </Tooltip>
                <Snackbar
                  className={classes.snackbarWrapper}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  onClose={handleClose}
                  open={selectedElement}
                  direction="up"
                  autoHideDuration={1000}
                  message="Remove from Favorite"
                  TransitionComponent={TransitionUp}
                />
              </div>
            )}
            <p>{matchDate?.split("-").slice(1).join(".")}</p>
            <p>{matchTime}</p>
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
              <p className={homeGoal > awayGoal ? classes.winner : ""}>
                {homeName}
              </p>
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
              <p className={awayGoal > homeGoal ? classes.winner : ""}>
                {awayName}
              </p>
            </span>
          </div>
        </div>
        <div className={classes.resultsWrapper}>
          <div className={classes.finalResult}>
            {homeGoal?.length > 0 ? (
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
      </Grid>
    </div>
  );
};

export default ResultTabel;
