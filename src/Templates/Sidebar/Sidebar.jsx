import React, { useEffect, useState } from "react";
import classes from "./Sidebar.module.css";
import { useDispatch } from "react-redux";
import { getFootball } from "../../app/footballSlice";
import request from "../../axios/Request";
const Sidebar = () => {
  const [country, setCountry] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchCountrys() {
      console.log(request.getCountrys);
      const data = await dispatch(getFootball(request.getCountrys));
      console.log(data);
      return data;
    }

    fetchCountrys();
  }, [dispatch]);

  return <div className={classes.sideBarWrapper}>SideBar</div>;
};

export default Sidebar;
