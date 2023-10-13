import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeadToHead from "../H2H/HeadToHead";
import StatisticsStandings from "./StatisticsStandings";
import { useDispatch } from "react-redux";
import { getOddsMatch } from "../../app/footballSlice";
import MatchTabs from "../MatchDetail/MatchTabs";
import { useDarkMode } from "../../context/DarkModeContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff004c",
    },
    secondary: {
      main: "#ff004c",
    },
  },
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
});

const TabListe = (props) => {
  const { isDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");
  const { item } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(getOddsMatch(item.match_id));
  }, [dispatch, item.match_id]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              marginTop: "15px",
              paddingLeft: "12px",
            }}
          >
            <TabList
              textColor={isDarkMode ? "inherit" : "secondary"}
              indicatorColor="secondary"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                style={{ borderBottomColor: "red" }}
                label="SUMMARY"
                value="1"
                textColor="primary"
              />
              <Tab textColor="primary" label="H2H" value="2" />
              <Tab label="STANDINGS" value="3" />
            </TabList>
          </Box>
          <TabPanel style={{ padding: "0px" }} value="1">
            <MatchTabs item={item} />
          </TabPanel>
          <TabPanel style={{ padding: "5px" }} value="2">
            <HeadToHead item={item} />
          </TabPanel>
          <TabPanel style={{ padding: "0px" }} value="3">
            <StatisticsStandings item={item} />
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default TabListe;
