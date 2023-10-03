import React, { useEffect } from "react";
import Table from "../Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { leagueStandings, leagueTopScores } from "../../app/footballSlice";

const StatisticsStandings = (props) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.leagueStandings);
  console.log(selector);
  useEffect(() => {
    dispatch(leagueStandings(props.item.league_id));
    dispatch(leagueTopScores(props.item.league_id));
  }, [dispatch]);

  return (
    <div>
      <Table />
    </div>
  );
};

export default StatisticsStandings;
