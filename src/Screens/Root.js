import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "../Templates/Navigation/Navigation";
import classes from "./HomePage.module.css";
import Joyride from "react-joyride";
import { useDispatch, useSelector } from "react-redux";
import { resetTour, nextStep, previousStep, stopTour, startTour } from "../app/joyrideSlice";
import { useDarkMode } from "../context/DarkModeContext";
const Root = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const isProbaRoute = location.pathname === `/statistics/${id}`;
  const { steps, stepIndex, run } = useSelector((state) => state.joyride);
  const [updatedSteps, setUpdatedSteps] = useState(steps);
  const { isDarkMode } = useDarkMode();


  const handleJoyrideCallback = (data) => {
    const { status, type, action } = data;
    const currentStep = steps[stepIndex];
    const handleNavigation = (targetRoute) => {
      if (location.pathname !== targetRoute) {
        dispatch(stopTour());
        navigate(targetRoute);
        setTimeout(() => dispatch(startTour()), 200);
      }
    };

    if (type === "step:after") {
      if (action === "next" && currentStep?.data?.next) {
        handleNavigation(currentStep.data.next);
        dispatch(nextStep());
      } else if (action === "prev" && currentStep?.data?.previous) {
        handleNavigation(currentStep.data.previous);
        dispatch(previousStep());
      }
    }

    if (action === "close") {
      dispatch(stopTour());
      dispatch(resetTour());
    }

    if (status === "finished") {
      dispatch(stopTour());
    }
  };

  return (
    <>
      {!isProbaRoute && <Navigation />}
      <main className={classes.mainContainer}>
        <Joyride
          steps={updatedSteps}
          stepIndex={stepIndex}
          callback={handleJoyrideCallback}
          continuous
          showSkipButton
          showProgress
          disableCloseOnEsc
          spotlightPadding
          run={run}
          scrollOffset={200}
          isFixed
          styles={{
            options: {
              zIndex: 999,
              backgroundColor: isDarkMode ? '#010a0f' : 'white',
              textColor: isDarkMode ? 'white' : 'black',
            },
          }}
        />
        <Outlet />
      </main>
    </>
  );
};

export default Root;
