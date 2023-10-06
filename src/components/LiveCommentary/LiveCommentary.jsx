import React from "react";
import classes from "./LiveCommentary.module.css";
import MatchOdds from "../MatchDetail/MatchOdds";
const LiveCommentary = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      {comments?.map((comment, index) => {
        return (
          <div className={classes.container} key={index}>
            {
              <p className={classes.commentsFonts}>
                {comment.time.split(":")[0]}'
              </p>
            }
            <p
              className={
                comment.text.includes("dangerous") ? classes.commentsFonts : ""
              }
            >
              {comment.text}
            </p>
          </div>
        );
      })}
      <div>
        <div className={classes.halfWrapper}>
          <p>PRE-MATCH ODDS</p>
        </div>
        <MatchOdds />
      </div>
    </div>
  );
};

export default LiveCommentary;
