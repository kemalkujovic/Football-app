import React from "react";
import classes from "./MainBar.module.css";
import { Link } from "react-router-dom";
const LinkBar = (props) => {
  return (
    <>
      <div className={classes.linkButtonWrapper}>
        <div className={classes.linkWrapper}>
          {props.icons}
          <span>{props.title}</span>
        </div>
      </div>
    </>
  );
};

export default LinkBar;
