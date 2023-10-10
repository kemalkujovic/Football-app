import React from "react";
import LeagueFixtures from "./LeagueFixtures";
import { useDarkMode } from "../../context/DarkModeContext";
const Fixtures = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section style={{ background: isDarkMode ? "#00141e" : "" }}>
      <LeagueFixtures />
    </section>
  );
};

export default Fixtures;
