import React from "react";
import classes from "./MainBar.module.css";
const LinkBar = (props, icons) => {
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
