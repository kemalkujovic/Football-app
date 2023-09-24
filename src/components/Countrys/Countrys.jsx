import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Countrys.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getLeague } from "../../app/footballSlice";
const Countrys = () => {
  /// lige
  const selector2 = useSelector((state) => state.football.leagueData);
  const dispatch = useDispatch();
  const onClickHandler = (id, index) => {
    dispatch(getLeague(id));

    setIsOpen((isOpen) => {
      if (isOpen.includes(index)) {
        return isOpen.filter((i) => i !== index);
      } else {
        return [...isOpen, index];
      }
    });
  };
  ////////
  const [more, setMore] = useState(false);
  const selector = useSelector((state) => state.football.footballData);
  const country = selector.slice(0, 10);
  const dataCountrys = selector.slice(10, 40);
  const [isOpen, setIsOpen] = useState([]);
  return (
    <div>
      {country.map((el, index) => {
        return (
          <div
            key={el.country_id}
            onClick={() => onClickHandler(el.country_id, index)}
            className={classes.countryWrapper}
          >
            <img src={el.country_logo} />
            <p>{el.country_name}</p>
            {selector2 && isOpen.includes(index) && (
              <div>
                {selector2.map((item) => {
                  return (
                    +item.country_id === +el.country_id && (
                      <div key={item.league_id}>
                        {console.log(item)}
                        <img
                          src={item.league_logo}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = item.country_logo;
                          }}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      {!more ? (
        <div className={classes.loadWrapper} onClick={() => setMore(!more)}>
          <span>Load More</span>
          <ExpandMoreIcon />
        </div>
      ) : (
        ""
      )}
      {more
        ? dataCountrys.map((el, index) => {
            return (
              <div
                onClick={() => onClickHandler(el.country_id, index)}
                key={index}
                className={classes.countryWrapper}
              >
                <img src={el.country_logo} />
                <p>{el.country_name}</p>
                {selector2 && isOpen.includes(index) && (
                  <div>
                    {selector2.map((item) => {
                      return (
                        +item.country_id === +el.country_id && (
                          <div key={item.league_id}>
                            {console.log(item)}
                            <img
                              src={item.league_logo}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = item.country_logo;
                              }}
                            />
                          </div>
                        )
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Countrys;
