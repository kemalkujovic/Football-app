import React from "react";
import classes from "./StatisticsTabel.module.css";
import StastisticsHeader from "./StastisticsHeader";
import TabListe from "./TabList";
const StatisticsTabel = (props) => {
  const { item } = props;

  return (
    <>
      {item?.map((item, index) => {
        return (
          <main key={index}>
            <StastisticsHeader item={item} />
            <TabListe item={item} />
          </main>
        );
      })}
    </>
  );
};

export default StatisticsTabel;
