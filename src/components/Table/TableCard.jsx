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
const TableCard = () => {
  const selector = useSelector((state) => state.football.leagueStandings);

  let brojac = 0;
  const mappedData = [];
  if (selector.length > 0) {
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
    <TableContainer component={Paper} className={classes.mainContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Team</TableCell>
            <TableCell align="right">G</TableCell>
            <TableCell align="right">P</TableCell>
            <TableCell align="right">N</TableCell>
            <TableCell align="right">I</TableCell>
            <TableCell align="right">B</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selector.length > 0 &&
            mappedData?.map((team, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" width="5px">
                  <span
                    className={
                      team.overall_promotion.split(" ")[0] === "Relegation"
                        ? classes.relegationWrapper
                        : team.overall_promotion.split(" ")[0] === "Promotion"
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
                <TableCell component="th" scope="row">
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
                <TableCell align="right">{team.overall_league_payed}</TableCell>
                <TableCell align="right">{team.overall_league_W}</TableCell>
                <TableCell align="right">{team.overall_league_D}</TableCell>
                <TableCell align="right">{team.overall_league_L}</TableCell>
                <TableCell align="right">{team.overall_league_PTS}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableCard;
