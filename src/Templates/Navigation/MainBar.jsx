import { Grid } from "@mui/material";
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
const MainBar = () => {
  const { isOpen, handleClick, setOpen } = useContext(SidebarContext);

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return (
    <>
      <div className={classes.mainBar}>
        <ScrollToTop smooth component={<ArrowUpwardIcon />} />
        <Grid>
          <Link to="/">
            <img src={logo} alt="Logo" className={classes.logo} />
          </Link>
        </Grid>
        <Grid display="flex" alignItems="center">
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <div className={classes.searchIcon}>
            <PersonIcon />
            <p>Login</p>
          </div>
          <div className={isOpen ? classes.activeMenu : classes.hamburgerIcon}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.6}
              color="white"
            />
          </div>
        </Grid>
      </div>
      {isOpen && (
        <div className={classes["menu-container"]}>
          <div className={classes["fade-in-text"]}>
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default MainBar;
