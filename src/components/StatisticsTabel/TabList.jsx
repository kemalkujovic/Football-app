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
import { getH2H, getOddsMatch } from "../../app/footballSlice";
import MatchDetail from "../MatchDetail/MatchDetail";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff004c",
    },
    secondary: {
      main: "#ff004c",
    },
  },
});

const TabListe = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");
  const { item } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const id = {
      homeId: item.match_hometeam_id,
      awayId: item.match_awayteam_id,
    };
    dispatch(getH2H(id));
    dispatch(getOddsMatch(item.match_id));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              textColor="secondary"
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
            <MatchDetail item={item} />
          </TabPanel>
          <TabPanel value="2">
            <HeadToHead item={item} />
          </TabPanel>
          <TabPanel value="3">
            <StatisticsStandings item={item} />
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default TabListe;
