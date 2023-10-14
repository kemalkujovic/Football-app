import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "../Table/Table.module.css";
import { useSelector } from "react-redux";
import { useDarkMode } from "../../context/DarkModeContext";
const TablePlayers = (props) => {
  const { isDarkMode } = useDarkMode();
  const homeTeam = props["teams"].teams.home;
  const awayTeam = props["teams"].teams.away;
  const selector = useSelector((state) => state.football.leagueTopScores);

  let data = selector;
  if (selector.length > 0) {
    data = selector?.slice(0, 10);
  }

  return (
    <>
      {selector?.error === 404 ? (
        <p>No TopScores Data</p>
      ) : (
        <TableContainer
          style={{ background: isDarkMode ? "#00141e" : "" }}
          component={Paper}
          className={classes.mainContainer}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: isDarkMode ? "white" : "" }}>
                  #
                </TableCell>
                <TableCell style={{ color: isDarkMode ? "white" : "" }}>
                  Name
                </TableCell>
                <TableCell
                  style={{ color: isDarkMode ? "white" : "" }}
                  align="left"
                >
                  TEAM
                </TableCell>
                <TableCell
                  align="right"
                  style={{ fontWeight: 600, color: isDarkMode ? "white" : "" }}
                >
                  G
                </TableCell>
                <TableCell
                  style={{ color: isDarkMode ? "white" : "" }}
                  align="right"
                >
                  A
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selector.length > 0 &&
                data?.map((row, index) => (
                  <TableRow
                    style={{
                      background: isDarkMode
                        ? row.team_name === homeTeam ||
                          row.team_name === awayTeam
                          ? "#0f2d37"
                          : ""
                        : row.team_name === homeTeam ||
                          row.team_name === awayTeam
                        ? "#eef7ff"
                        : "",
                    }}
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      width="5px"
                      style={{
                        fontWeight: 600,
                        color: isDarkMode ? "white" : "",
                      }}
                    >
                      {row.player_place}.
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      component="th"
                      scope="row"
                    >
                      {row.player_name}
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      align="left"
                    >
                      {row.team_name}
                    </TableCell>
                    <TableCell
                      align="right"
                      width="5px"
                      style={{
                        fontWeight: 600,
                        color: isDarkMode ? "white" : "",
                      }}
                    >
                      {row.goals}
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      align="right"
                      width="5px"
                    >
                      {row.assists.length === 0 ? "0" : row.assists}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default TablePlayers;
