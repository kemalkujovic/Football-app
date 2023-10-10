import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import classes from "./Table.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
const TableCard = (props) => {
  const { isDarkMode } = useDarkMode();
  const homeTeam = props["teams"].home;
  const awayTeam = props["teams"].away;
  const selector = useSelector((state) => state.football.leagueStandings);
  let brojac = 0;
  const mappedData = [];
  if (selector?.length > 0) {
    for (const item of selector) {
      if (
        brojac === 2 ||
        (+item.overall_league_position === 1 && brojac === 1)
      ) {
        break;
      }
      mappedData.push(item);
      if (+item.overall_league_position === 1) {
        brojac++;
      }
    }
  }
  return (
    <>
      {selector?.error === 404 ? (
        <p>{selector.message}</p>
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
                  Team
                </TableCell>
                <TableCell
                  style={{ color: isDarkMode ? "white" : "" }}
                  align="right"
                >
                  G
                </TableCell>
                <TableCell
                  style={{ color: isDarkMode ? "white" : "" }}
                  align="right"
                >
                  P
                </TableCell>
                <TableCell
                  style={{ color: isDarkMode ? "white" : "" }}
                  align="right"
                >
                  N
                </TableCell>
                <TableCell
                  style={{ color: isDarkMode ? "white" : "" }}
                  align="right"
                >
                  I
                </TableCell>
                <TableCell
                  style={{ color: isDarkMode ? "white" : "" }}
                  align="right"
                >
                  B
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selector?.length > 0 &&
                mappedData?.map((team, index) => (
                  <TableRow
                    style={{
                      background: isDarkMode
                        ? team.team_name === homeTeam ||
                          team.team_name === awayTeam
                          ? "#0f2d37"
                          : ""
                        : team.team_name === homeTeam ||
                          team.team_name === awayTeam
                        ? "#eef7ff"
                        : "",
                    }}
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      component="th"
                      scope="row"
                      width="5px"
                    >
                      <span
                        className={
                          team.overall_promotion.split(" ")[0] === "Relegation"
                            ? classes.relegationWrapper
                            : team.overall_promotion.split(" ")[0] ===
                              "Promotion"
                            ? classes.promotionWrapper
                            : team.overall_promotion.split(" ")[0] ===
                              "Championship"
                            ? classes.promotionWrapper
                            : classes.obicno
                        }
                      >
                        {team.overall_league_position}.
                      </span>
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      component="th"
                      scope="row"
                    >
                      <div className={classes.wrapperLogo}>
                        <img
                          width="30px"
                          src={team?.team_badge}
                          alt=""
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = team.country_logo;
                          }}
                        />
                        <p>{team.team_name}</p>
                      </div>
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      align="right"
                    >
                      {team.overall_league_payed}
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      align="right"
                    >
                      {team.overall_league_W}
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      align="right"
                    >
                      {team.overall_league_D}
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      align="right"
                    >
                      {team.overall_league_L}
                    </TableCell>
                    <TableCell
                      style={{ color: isDarkMode ? "white" : "" }}
                      align="right"
                    >
                      {team.overall_league_PTS}
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
export default TableCard;
