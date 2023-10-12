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
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedModal(props) {
  const { openModal, handleClose } = props;
  const { isDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(search);
  const dispatch = useDispatch();
  // const [data, setData] = useState([]);
  const selector = useSelector((state) => state.football.getPlayers);
  const resetSelector = () => {
    dispatch({ type: "RESET_GET_PLAYERS" });
  };
  console.log(selector);
  useEffect(() => {
    if (openModal) {
      const debounceTimer = setTimeout(() => {
        setDebouncedSearchTerm(search);
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
    setSearch(e.target.value);
  };
  const handleModalClose = () => {
    resetSelector();
    setSearch("");
    setDebouncedSearchTerm("");
    handleClose();
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleModalClose}
        aria-labelledby="customized-dialog-title"
        open={openModal}
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
            placeholder="Pretraga..."
            value={search}
            onChange={handleInputChange}
          />
          <p>
            Please type characters. The results will start displaying here
            immediately.
          </p>
          <ul className={classes.containerSearch}>
            {selector.error === 404 ? (
              <p>{selector.message}</p>
            ) : (
              selector?.map((item, index) => {
                if (!item.player_image) return;
                return (
                  <li
                    className={`${classes.searchWrapper} ${
                      isDarkMode ? classes.darkSearchWrapper : ""
                    }`}
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
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
