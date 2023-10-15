import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import classes from "./RegisterModal.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import GoogleButton from "react-google-button";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root-MuiDialog-paper": {
    margin: theme.spacing(1),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "@media (max-width: 550px)": {
    "& .MuiPaper-root": {
      width: "100%",
      position: "absolute",
      top: "50px",
      height: "100vh",
    },
  },
}));

const RegisterModal = (props) => {
  const [email, setEmail] = useState(false);
  const [register, setRegister] = useState(false);
  const [recaptcha, setReceptcha] = useState(null);
  const { openModal, handleClose } = props;
  const { isDarkMode } = useDarkMode();
  const { currentUser } = useContext(AuthContext);
  if (openModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  const handleClickGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      handleClose();
    });
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openModal}
        disableScrollLock
      >
        <DialogTitle
          sx={{ m: 0, p: 3 }}
          id="customized-dialog-title"
          style={{
            background: isDarkMode ? " #010a0f" : "",
          }}
        ></DialogTitle>
        <>
          {email || register ? (
            <IconButton
              onClick={() => {
                if (email) {
                  setEmail(!email);
                } else {
                  setEmail(true);
                  setRegister(!register);
                }
              }}
              sx={{
                position: "absolute",
                left: 8,
                top: 8,
                fontSize: "1rem",

                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <ArrowBackIosNewIcon />
              <Typography variant="p">Back</Typography>
            </IconButton>
          ) : (
            ""
          )}

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </>
        <DialogContent
          style={{
            background: isDarkMode ? " #010a0f" : "",
            borderTop: "none",
          }}
          className={classes.mainContainer}
          dividers
        >
          {!email && !register && (
            <div>
              <Typography variant="h5">Sign up to get more</Typography>
              <div className={classes.buttonWrappers}>
                <GoogleButton
                  onClick={handleClickGoogle}
                  style={{ width: "100%" }}
                />
                <div
                  onClick={() => setEmail(!email)}
                  className={classes.emailWrapper}
                >
                  <EmailIcon />
                  <Typography sx={{ margin: "auto" }} variant="p">
                    Continue with email
                  </Typography>
                </div>
              </div>
            </div>
          )}
          {email || register ? (
            <div>
              <Typography variant="h5">
                {email
                  ? "Log in to an existing account"
                  : "Create a new account"}
              </Typography>
              <TextField
                size="small"
                variant="outlined"
                type="text"
                placeholder="Email"
                sx={{
                  background: isDarkMode ? "#001e28" : "",
                  width: "100%",
                  marginBottom: "15px",
                }}
              />
              <TextField
                size="small"
                variant="outlined"
                type="password"
                placeholder="Password"
                sx={{
                  background: isDarkMode ? "#001e28" : "",
                  width: "100%",
                  marginBottom: "15px",
                }}
              />
              {register && (
                <div className={classes.captchaWrapper}>
                  <ReCAPTCHA
                    sitekey="6LfH_p4oAAAAAKdMB8-_4ND5ekt6vEQjigtRC5iB"
                    onChange={(val) => setReceptcha(val)}
                  />
                </div>
              )}
              <Button
                disabled={register && !recaptcha}
                sx={{
                  background: "#c8cdcd",
                  color: "black",
                  width: "100%",
                  marginBottom: "15px",
                  "&:hover": {
                    backgroundColor: "#ddd",
                  },
                  "&:disabled": {
                    color: "#606060",
                  },
                }}
                variant="text"
              >
                {email ? "LOG IN" : "SIGN UP"}
              </Button>
              <div
                className={
                  isDarkMode ? classes.separetor : classes.separetorLight
                }
              ></div>
              <span className={classes.description}>
                {email ? "Don't have an account?" : "Do you have an account?"}
                <Link
                  onClick={() => {
                    if (email) {
                      setEmail(false);
                      setRegister(true);
                    } else {
                      setRegister(false);
                      setEmail(true);
                    }
                  }}
                  style={{ color: isDarkMode ? "" : "#4e4e4e" }}
                >
                  {email ? "Sign up" : "Log In"}
                </Link>
              </span>
            </div>
          ) : (
            ""
          )}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default RegisterModal;
