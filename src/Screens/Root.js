import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "../Templates/Navigation/Navigation";
import classes from "./HomePage.module.css";
import Joyride from "react-joyride";
import { useDispatch, useSelector } from "react-redux";
import { resetTour, nextStep, previousStep, stopTour, startTour } from "../app/joyrideSlice";
const Root = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const isProbaRoute = location.pathname === `/statistics/${id}`;
  const { steps, stepIndex, run } = useSelector((state) => state.joyride);

  const handleJoyrideCallback = (data) => {
    const { status, type, action } = data;
    const currentStep = steps[stepIndex];
    if (type === "step:after") {
      if (action === "next") {
        dispatch(nextStep());
      } else if (action === "prev") {
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
  // const handleCallback = (data) => {
  //   if (data.type === 'step:after') {
  //    v
  //     if (data.action === 'next' && currentStep.data?.next) {
  //       dispatch(stopTour());  // Privremeno zaustavlja vodič
  //       navigate(currentStep.data.next);  // Navigacija
  //       setTimeout(() => dispatch(startTour()), 100);  // Nastavlja vodič
  //     } else if (data.action === 'prev' && currentStep.data?.previous) {
  //       dispatch(stopTour());
  //       navigate(currentStep.data.previous);
  //       setTimeout(() => dispatch(startTour()), 100);
  //     } else {
  //       dispatch(data.action === 'next' ? nextStep() : previousStep());
  //     }
  //   }
  // };
  useEffect(() => {
    const currentStep = steps[stepIndex];
    if (stepIndex === 7) {
      dispatch(stopTour());
      navigate(currentStep.data.next);
      setTimeout(() => dispatch(startTour()), 100);
    }

  }, [stepIndex, navigate]);

  return (
    <>
      {!isProbaRoute && <Navigation />}
      <main className={classes.mainContainer}>
        <Joyride
          steps={steps}
          stepIndex={stepIndex}
          callback={handleJoyrideCallback}
          continuous
          showSkipButton
          showProgress
          disableCloseOnEsc
          spotlightPadding
          run={run}
        />
        <Outlet />
      </main>
    </>
  );
};

export default Root;
