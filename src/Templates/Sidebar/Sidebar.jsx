import React, { useContext, useEffect, useState } from "react";
import classes from "./Sidebar.module.css";
import { useDispatch } from "react-redux";
import { getFootball } from "../../app/footballSlice";
import request from "../../axios/Request";
import Countrys from "../../components/Countrys/Countrys";
import Favorites from "../../components/Favorites/Favorites";
import { SidebarContext } from "../../context/SideBarContext";
const Sidebar = () => {
  const [country, setCountry] = useState([]);
  const dispatch = useDispatch();
  const { isSidebarVisible } = useContext(SidebarContext);
  useEffect(() => {
    async function fetchCountrys() {
      const data = await dispatch(getFootball(request.getCountrys));
      setCountry(data.payload);
      return data;
    }

    fetchCountrys();
  }, [dispatch]);

  return (
    <div
      className={`${!isSidebarVisible ? classes.hideSideBar : classes.sidebar}`}
    >
      <Favorites />
      <Countrys />
    </div>
  );
};

export default Sidebar;
