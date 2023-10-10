import React from "react";
import LiveCard from "./LiveCard";
import { useDarkMode } from "../../context/DarkModeContext";
const LiveMatch = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section style={{ background: isDarkMode ? "#00141e" : "" }}>
      <LiveCard />
    </section>
  );
};

export default LiveMatch;
