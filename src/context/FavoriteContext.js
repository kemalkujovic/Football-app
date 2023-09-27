import React, { createContext, useState } from "react";
import { leagues } from "../util/helper";

export const FavoriteContext = createContext();
export const FavoriteContextProvider = ({ children }) => {
  const [data, setData] = useState([leagues]);
  return (
    <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
  );
};
