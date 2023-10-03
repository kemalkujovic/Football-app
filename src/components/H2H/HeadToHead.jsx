import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getH2H } from "../../app/footballSlice";

const HeadToHead = ({ item }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.football.getH2H);
  console.log(selector);
  useEffect(() => {
    const id = {
      homeId: item.match_hometeam_id,
      awayId: item.match_awayteam_id,
    };
    dispatch(getH2H(id));
  }, [dispatch]);

  return <div>RADII</div>;
};

export default HeadToHead;
