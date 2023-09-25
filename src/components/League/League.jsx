import React from "react";

const League = (props) => {
  const { league_id, league_logo, country_logo, league_name } = props;
  return (
    <div key={league_id}>
      <img
        src={league_logo}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = country_logo;
        }}
      />
      <p>{league_name}</p>
    </div>
  );
};

export default League;
