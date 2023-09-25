import React from "react";

const League = (props) => {
  const { league_id, league_logo, country_logo, league_name, onClick } = props;
  return (
    <div key={league_id} onClick={onClick}>
      <img
        src={league_logo}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = country_logo;
        }}
        alt="logo"
      />
      <p>{league_name}</p>
    </div>
  );
};

export default League;
