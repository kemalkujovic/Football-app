import { Grid, Switch } from "@mui/material";
import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import classes from "./MainBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Hamburger from "hamburger-react";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarContext } from "../../context/SideBarContext";
import { useDarkMode } from "../../context/DarkModeContext";

import NightsStayIcon from "@mui/icons-material/NightsStay";
import CustomizedModal from "../Modal/CustomizedModal";
const MainBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isOpen, setOpen, isSidebarVisible } = useContext(SidebarContext);

  if (isOpen && isSidebarVisible) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className={classes.mainBar}>
        <ScrollToTop
          style={{ background: "#0f2d37", color: "white" }}
          smooth
          component={<ArrowUpwardIcon />}
        />
        <Grid>
          <Link to="/">
            <img src={logo} alt="Logo" className={classes.logo} />
          </Link>
        </Grid>
        <Grid display="flex" alignItems="center">
          <div className={classes.searchIcon}>
            <SearchIcon onClick={() => handleClickOpen(!openModal)} />
            {openModal ? (
              <CustomizedModal
                handleClose={handleClose}
                openModal={openModal}
              />
            ) : (
              ""
            )}
          </div>
          <div className={classes.searchIcon}>
            <PersonIcon />
            <p>Login</p>
          </div>

          <div className={true ? classes.activeMenu : classes.hamburgerIcon}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.6}
              color="white"
            />
            {isOpen && (
              <div className={classes["menu-container"]}>
                <div
                  style={{ background: isDarkMode ? "#010a0f" : "" }}
                  className={classes["fade-in-text"]}
                >
                  <div className={classes.darkModeWrapper}>
                    <div>
                      <NightsStayIcon />
                      <p>Dark mode</p>
                    </div>
                    <Switch
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>
                  <div className={classes.sideBarResposnive}>
                    <Sidebar />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Grid>
      </div>
    </>
  );
};

export default MainBar;
