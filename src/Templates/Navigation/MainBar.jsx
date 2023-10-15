import { Grid, Switch } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import LogoutIcon from "@mui/icons-material/Logout";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import CustomizedModal from "../Modal/CustomizedModal";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const MainBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [settings, setSettings] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isOpen, setOpen, isSidebarVisible } = useContext(SidebarContext);
  const { currentUser } = useContext(AuthContext);
  const buttonRef = useRef();
  const menuRef = useRef();
  const hamburgerMenu = useRef();
  const iconRef = useRef();
  if ((isOpen && isSidebarVisible) || (settings && isSidebarVisible)) {
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

  const handleLoginOpen = () => {
    setLoginModal(true);
  };
  const handleLoginClose = () => {
    setLoginModal(false);
  };

  const handleUserSettings = () => {
    setSettings(!settings);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (buttonRef.current && buttonRef.current.contains(e.target)) ||
        (menuRef.current && menuRef.current.contains(e.target))
      ) {
        return;
      }
      setSettings(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (iconRef.current && iconRef.current.contains(e.target)) ||
        (hamburgerMenu.current && hamburgerMenu.current.contains(e.target))
      ) {
        return;
      }
      setOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
            {currentUser ? (
              <div
                ref={buttonRef}
                onClick={handleUserSettings}
                className={classes.loginWrapper}
                style={{ display: "flex" }}
              >
                <PersonIcon />
                <p>{currentUser?.displayName}</p>
              </div>
            ) : (
              <div
                className={classes.loginWrapper}
                style={{ display: "flex" }}
                onClick={() => handleLoginOpen(!openModal)}
              >
                <PersonIcon />
                <p>Login</p>
              </div>
            )}
            {settings && (
              <div ref={menuRef} className={classes["menu-container"]}>
                <div
                  style={{
                    background: isDarkMode ? "#010a0f" : "",
                  }}
                  className={`${classes["fade-in-text"]} ${classes.fadeResponsive}`}
                >
                  <div
                    onClick={() => {
                      signOut(auth);
                      setSettings(!settings);
                    }}
                    className={classes.logoutWrapper}
                  >
                    <LogoutIcon style={{ color: "#ff0046" }} />
                    <p style={{ color: "#ff0046" }}>Logout</p>
                  </div>
                </div>
              </div>
            )}
            {loginModal ? (
              <RegisterModal
                handleClose={handleLoginClose}
                openModal={loginModal}
              />
            ) : (
              ""
            )}
          </div>

          <div
            ref={iconRef}
            className={true ? classes.activeMenu : classes.hamburgerIcon}
          >
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              duration={0.6}
              color="white"
            />
            {isOpen && (
              <div ref={hamburgerMenu} className={classes["menu-container"]}>
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
