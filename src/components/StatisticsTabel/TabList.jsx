import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HeadToHead from "../H2H/HeadToHead";

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
  const [value, setValue] = useState("1");
  const { item } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <TabPanel value="1">SUMMARY</TabPanel>
          <TabPanel value="2">
            <HeadToHead item={item} />
          </TabPanel>
          <TabPanel value="3">STANDINGS</TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
};

export default TabListe;
