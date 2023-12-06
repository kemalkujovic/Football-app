import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStatistics } from "../app/footballSlice";
import StatisticsTabel from "../components/StatisticsTabel/StatisticsTabel";

const StatisticsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.getStatistics);
  useEffect(() => {
    const fetchData = () => {
      dispatch(getStatistics(id));
    };
    const intervalId = setInterval(fetchData, 30000);
    fetchData();
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);

  return (
    <div>
      <StatisticsTabel item={selector} />
    </div>
  );
};

export default StatisticsPage;
