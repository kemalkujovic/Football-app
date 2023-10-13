import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPlayers } from "../../app/footballSlice";
import classes from "./CustomizedModal.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { Skeleton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiPaper-root-MuiDialog-paper": {
    margin: theme.spacing(1),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "@media (max-width: 500px)": {
    "& .MuiPaper-root": {
      width: "100%",
      position: "absolute",
      top: "50px",
      height: "100vh",
    },
  },
}));

export default function CustomizedModal(props) {
  const { openModal, handleClose } = props;
  const { isDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(search);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.getPlayers);

  const data =
    selector.length > 0 &&
    selector.filter((item) => item.player_image).slice(0, 10);

  const historySearch = JSON.parse(localStorage.getItem("search")) || [];

  if (openModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  const resetSelector = () => {
    dispatch({ type: "RESET_GET_PLAYERS" });
  };
  useEffect(() => {
    if (openModal) {
      const debounceTimer = setTimeout(() => {
        setDebouncedSearchTerm(search.trim());
        setLoading(false);
      }, 500);

      return () => {
        clearTimeout(debounceTimer);
      };
    }
  }, [openModal, search]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getPlayers(debouncedSearchTerm));
    }
  }, [dispatch, debouncedSearchTerm]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
    setLoading(inputValue !== "");

    if (inputValue !== "") {
      resetSelector();
    }
  };
  const handleModalClose = () => {
    resetSelector();
    setSearch("");
    setDebouncedSearchTerm("");
    handleClose();
  };

  const handleOnInput = (e) => {
    if (e.target.value === "") {
      resetSelector();
    }
  };
  const handlePlayer = (item) => {
    const existingItem = historySearch.find(
      (dataItem) => dataItem.player_id === item.player_id
    );
    if (!existingItem) {
      historySearch.push(item);
    }
    localStorage.setItem("search", JSON.stringify(historySearch));
    handleModalClose();
    navigate(`/${item.player_name}/${item.player_id}`);
  };
  return (
    <div>
      <BootstrapDialog
        disableScrollLock
        onClose={handleModalClose}
        aria-labelledby="customized-dialog-title"
        open={openModal}
        fullWidth={true}
      >
        <DialogTitle
          style={{ background: isDarkMode ? " #010a0f" : "" }}
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Search
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleModalClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          style={{ background: isDarkMode ? " #010a0f" : "" }}
          dividers
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Search"
            variant="outlined"
            type="text"
            value={search}
            onChange={handleInputChange}
            onInput={handleOnInput}
            autoComplete="off"
          />
          <p>
            Please type characters. The results will start displaying here
            immediately
          </p>
          <ul className={classes.containerSearch}>
            {selector.error === 404 ? (
              <p>{selector.message}</p>
            ) : loading ? (
              <>
                {[0, 1, 2, 3].map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      component="div"
                      className={classes.skeletonWrapper}
                    >
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        width={45}
                        height={45}
                      />
                      <Typography variant="h3">
                        <Skeleton animation="wave" />
                      </Typography>
                    </Typography>
                  );
                })}
              </>
            ) : (
              data &&
              data?.map((item, index) => {
                if (!item.player_image) return;
                return (
                  <li
                    className={`${classes.searchWrapper} ${
                      isDarkMode ? classes.darkSearchWrapper : ""
                    }`}
                    onClick={() => handlePlayer(item)}
                    key={index}
                  >
                    <img
                      src={item.player_image}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://apiv3.apifootball.com/badges/players/97489_t-messing.jpg";
                      }}
                      alt="Player"
                      loading="lazy"
                    />
                    <div>
                      <p>{item.player_name}</p>
                      <p>{item.team_name}</p>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
          <ul className={classes.containerSearch}>
            <h5>YOUR LAST SEARCH</h5>
            {historySearch.length > 0 &&
              historySearch?.map((item, index) => {
                return (
                  <li
                    className={`${classes.searchWrapper} ${
                      isDarkMode ? classes.darkSearchWrapper : ""
                    }`}
                    onClick={() => handlePlayer(item)}
                    key={index}
                  >
                    <img
                      src={item.player_image}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://apiv3.apifootball.com/badges/players/97489_t-messing.jpg";
                      }}
                      alt="Player"
                      loading="lazy"
                    />
                    <div>
                      <p>{item.player_name}</p>
                      <p>{item.team_name}</p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
