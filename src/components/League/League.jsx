import React, { useContext } from "react";
import { SidebarContext } from "../../context/SideBarContext";

const League = (props) => {
  const { league_id, league_logo, country_logo, league_name } = props;
  const { handleClick } = useContext(SidebarContext);

  return (
    <div key={league_id} onClick={handleClick}>
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
