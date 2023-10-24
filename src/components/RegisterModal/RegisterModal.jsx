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
import { CircularProgress, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { auth, provider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import * as Yup from "yup";
import { useFormik } from "formik";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { openModal, handleClose } = props;
  const { isDarkMode } = useDarkMode();
  const { setCurrentUser } = useContext(AuthContext);
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .min(10, "Email must have at least 10 characters")
      .max(30, "Email must have max 30 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must have at least 8 characters")
      .max(30, "Password must have max 30 characters"),
    name:
      register &&
      Yup.string()
        .required("Name is required")
        .min(3, "Name must have at least 3 characters")
        .max(10, "Name must have max 10 characters"),
  });

  let initialValue = { email: "", password: "", name: "" };

  if (openModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  const handleClickGoogle = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const { email, password, name } = values;
      createUser(email, password, name);
    },
  });

  function createUser(email, password, name) {
    setLoading(true);
    if (register) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
          }).then(() => {
            setCurrentUser(user);
            setLoading(false);
            handleClose();
          });
        })
        .catch((error) => {
          setLoading(false);
          setError("User already exist.");
        });
    } else {
      loginUser(email, password);
    }
  }

  function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        setLoading(false);
        handleClose();
      })
      .catch((error) => {
        setLoading(false);
        setError("Wrong email or passsword");
      });
  }

  function onClickHandler() {
    formik.resetForm(initialValue);
    setError(null);
    if (email) {
      setEmail(!email);
    } else {
      setEmail(true);
      setRegister(!register);
    }
  }
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
                onClickHandler();
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
              {loading ? (
                <div className={classes.loaderWrapper}>
                  <CircularProgress />
                </div>
              ) : (
                <form onSubmit={formik.handleSubmit}>
                  <Typography variant="h5">
                    {email
                      ? "Log in to an existing account"
                      : "Create a new account"}
                  </Typography>
                  {register && (
                    <>
                      <TextField
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="name"
                        size="small"
                        variant="outlined"
                        type="text"
                        placeholder="Name"
                        value={formik.values.name}
                        error={!!formik.errors.name}
                        sx={{
                          background: isDarkMode ? "#001e28" : "",
                          width: "100%",
                          marginBottom: "15px",
                        }}
                      />
                      <Typography variant="body2" style={{ color: "red" }}>
                        {formik.errors.name &&
                          formik.touched.name &&
                          formik.errors.name}
                      </Typography>
                    </>
                  )}
                  <TextField
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"
                    size="small"
                    variant="outlined"
                    type="text"
                    placeholder="Email"
                    value={formik.values.email}
                    error={!!formik.errors.email}
                    sx={{
                      background: isDarkMode ? "#001e28" : "",
                      width: "100%",
                      marginBottom: "15px",
                    }}
                  />
                  <Typography variant="body2" style={{ color: "red" }}>
                    {formik.errors.email &&
                      formik.touched.email &&
                      formik.errors.email}
                  </Typography>
                  <TextField
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={!!formik.errors.password}
                    name="password"
                    size="small"
                    variant="outlined"
                    type="password"
                    value={formik.values.password}
                    placeholder="Password"
                    sx={{
                      background: isDarkMode ? "#001e28" : "",
                      width: "100%",
                      marginBottom: "15px",
                    }}
                  />
                  <Typography variant="body2" style={{ color: "red" }}>
                    {formik.errors.password &&
                      formik.touched.password &&
                      formik.errors.password}
                  </Typography>
                  {error && (
                    <Typography variant="body2" style={{ color: "red" }}>
                      {error}
                    </Typography>
                  )}
                  {register && (
                    <div className={classes.captchaWrapper}>
                      <ReCAPTCHA
                        sitekey={process.env.REACT_APP_CAPTCHA_KEY}
                        onChange={(val) => setReceptcha(val)}
                      />
                    </div>
                  )}
                  <Button
                    type="submit"
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
                </form>
              )}

              <div
                className={
                  isDarkMode ? classes.separetor : classes.separetorLight
                }
              ></div>
              <span className={classes.description}>
                {email ? "Don't have an account?" : "Do you have an account?"}
                <Link
                  onClick={() => {
                    setError(null);
                    formik.resetForm(initialValue);
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
