import React, { useEffect } from "react";
import Table from "../Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { leagueStandings, leagueTopScores } from "../../app/footballSlice";

const StatisticsStandings = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(leagueStandings(props.item.league_id));
    dispatch(leagueTopScores(props.item.league_id));
  }, [dispatch]);

  return (
    <div>
      <Table
        home={props.item.match_hometeam_name}
        away={props.item.match_awayteam_name}
      />
    </div>
  );
};

export default StatisticsStandings;
