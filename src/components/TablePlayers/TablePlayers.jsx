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
const TablePlayers = () => {
  const selector = useSelector((state) => state.football.leagueTopScores);
  return (
    <>
      <TableContainer component={Paper} className={classes.mainContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="left">TEAM</TableCell>
              <TableCell align="right">G</TableCell>
              <TableCell align="right">A</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selector.length > 0 &&
              selector?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" width="5px">
                    {row.player_place}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.player_name}
                  </TableCell>
                  <TableCell align="left">{row.team_name}</TableCell>
                  <TableCell align="right" width="5px">
                    {row.goals}
                  </TableCell>
                  <TableCell align="right" width="5px">
                    {row.assists.length === 0 ? "0" : row.assists}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablePlayers;
