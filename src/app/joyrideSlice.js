import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    run: false,
    stepIndex: 0,
    matchId: null,
    steps: [
        {
            target: ".step-1",
            content: "Here you can find your favorite leagues.",
            disableBeacon: true,
            data: { next: '/', previous: '/' }
        },
        {
            target: ".step-2",
            content: "This section displays all leagues by country.",
            disableBeacon: true,
            data: { next: '/league/152', previous: '/' }
        },
        {
            target: ".step-results",
            content: "View the latest match results from this league here.",
            disableBeacon: true,
            data: { next: '/league/152', previous: '/league/152' }
        },
        {
            target: ".step-fixtures",
            content: "Check the upcoming matches in this league here.",
            disableBeacon: true,
            data: { next: '/league/152', previous: '/league/152' }
        },
        {
            target: ".step-tableLeague",
            content: "View the league table and top scorers in this section.",
            disableBeacon: true,
            data: { next: '/', previous: '/league/152' }
        },
        {
            target: ".step-3",
            content: "Discover all matches scheduled for today here.",
            disableBeacon: true,
            data: { next: '/', previous: '/league/152' }
        },
        {
            target: ".step-4",
            content: "Check out live matches happening right now.",
            disableBeacon: true,
            data: { next: '/', previous: '/' }
        },
        {
            target: ".step-5",
            content: "Select a date to view matches scheduled for that day.",
            disableBeacon: true,
            data: { next: '/', previous: '/' }
        },
        {
            target: ".step-14",
            disableBeacon: true,
            content: "Switch between Dark Mode and Light Mode themes here.",
            data: { previous: '/', next: '/' }
        },
        {
            target: ".step-15",
            disableBeacon: true,
            content: "Log in or sign up from this section.",
            data: { previous: '/', next: '/' }
        },
        {
            target: ".step-16",
            disableBeacon: true,
            content: "Search for players and explore detailed profiles here.",
            data: { previous: '/', next: '/' }
        },
        {
            target: ".step-6",
            content: "Add leagues to your favorites from here.",
            disableBeacon: true,
            data: { next: '/', previous: '/' }
        },
        {
            target: ".step-7",
            content: "Mark matches as your favorites in this section.",
            disableBeacon: true,
            data: { next: '/favorite', previous: '/' }
        },
        {
            target: ".step-8",
            disableBeacon: true,
            content: "View your favorite matches in this section.",
            data: { previous: '/', next: '/favorite' }
        },
        {
            target: ".step-9",
            disableBeacon: true,
            content: "Enable or disable sound notifications for goals here.",
            data: { previous: '/favorite', next: `/statistics/${null}` }
        },
        {
            target: ".step-10",
            disableBeacon: true,
            content: "Explore match details in this section.",
            data: { previous: `/favorite`, next: `/statistics/${null}` }
        },
        {
            target: ".step-11",
            disableBeacon: true,
            content: "Review recent matches and head-to-head stats between teams.",
            data: { previous: `/statistics/${null}`, next: `/statistics/${null}` }
        },
        {
            target: ".step-12",
            disableBeacon: true,
            content: "Check the league table and team standings here.",
            data: { previous: `/statistics/${null}`, next: `/statistics/${null}` }
        },
        {
            target: ".step-13",
            disableBeacon: true,
            content: "Find the league table, team positions, and top scorers in this section.",
            data: { previous: `/statistics/${null}`, next: `/statistics/${null}` }
        },
    ]

}

const joyrideSlice = createSlice({
    name: "joyride",
    initialState,
    reducers: {
        startTour(state) {
            state.run = true;
        },
        stopTour(state) {
            state.run = false;
        },
        nextStep(state) {
            state.stepIndex += 1;
        },
        previousStep(state) {
            state.stepIndex = Math.max(0, state.stepIndex - 1);
        },
        resetTour(state) {
            state.run = false;
            state.stepIndex = 0;
        },
        setMatchId(state, action) {
            state.matchId = action.payload;
        },
        updateStep(state, action) {
            const { target, next } = action.payload;
            state.steps = state.steps.map(step =>
                step.target === target
                    ? { ...step, data: { ...step.data, next } }
                    : step
            );
        },

    },
});
export const { startTour, stopTour, nextStep, resetTour, previousStep, setMatchId, updateStep } = joyrideSlice.actions;
export default joyrideSlice;
