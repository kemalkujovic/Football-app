import React from "react";
import classes from "./StatisticsTabel.module.css";
import StastisticsHeader from "./StastisticsHeader";
import TabListe from "./TabList";
const StatisticsTabel = (props) => {
  const { item } = props;

  return (
    <>
      {item.map((item) => {
        return (
          <>
            <StastisticsHeader item={item} />
            <TabListe />
          </>
        );
      })}
    </>
  );
};

export default StatisticsTabel;
