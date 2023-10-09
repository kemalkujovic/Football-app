import React from "react";
import TablePlayers from "./TablePlayers";

const TopScores = (props) => {
  return (
    <div>
      <TablePlayers teams={props} />
    </div>
  );
};

export default TopScores;
