import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    run: true,
    stepIndex: 0,
    matchId: null,
    steps: [
        {
            target: ".step-1",
            content: "Ovo su vase favorite lige",
            disableBeacon: true,
            data: { next: '/', previous: '/' }
        },
        {
            target: ".step-2",
            content: "Ovde možete pronaći sve lige drzava.",
            disableBeacon: true,
            data: { next: '/league/152', previous: '/' }
        },
        {
            target: ".step-results",
            content: "Ovde možete od lige zadnje kola rezultate utakmica.",
            disableBeacon: true,
            data: { next: '/league/152', previous: '/league/152' }
        },
        {
            target: ".step-fixtures",
            content: "Ovde možete od lige videti sledece kola matcheva od lige.",
            disableBeacon: true,
            data: { next: '/league/152', previous: '/league/152' }
        },
        {
            target: ".step-tableLeague",
            content: "Ovde možete od lige videti sledece kola matcheva od lige.",
            disableBeacon: true,
            data: { next: '/', previous: '/league/152' }
        },
        {
            target: ".step-3",
            content: "Ovde mozete videti sve utakmice za danasnji dan.",
            disableBeacon: true,
            data: { next: '/', previous: '/league/152' }
        },
        {
            target: ".step-4",
            content: "Ovde mozete videti utakmice za naredne datume.",
            disableBeacon: true,
            data: { next: '/', previous: '/' }
        },
        {
            target: ".step-5",
            content: "Ovde mozete videti sve utakmice koje se trenutno igraju.",
            disableBeacon: true,
            data: { next: '/', previous: '/' }
        },
        {
            target: ".step-14",
            disableBeacon: true,
            content: "Ovde mozete videti zadnje matcheve i head to head matchove ovih ekipa.",
            data: { previous: `/`, next: '/' }
        },
        {
            target: ".step-15",
            disableBeacon: true,
            content: "Ovde mozete videti zadnje matcheve i head to head matchove ovih ekipa.",
            data: { previous: '/', next: '/' }
        },
        {
            target: ".step-16",
            disableBeacon: true,
            content: "Ovde mozete videti tabelu lige i mesto njihovo i top scores iz ove lige.",
            data: { previous: '/', next: '/' }
        },
        {
            target: ".step-6",
            content: "Ovde mozete dodati vasu ligu u favorite lige.",
            disableBeacon: true,
            data: { next: '/', previous: '/' }
        },
        {
            target: ".step-7",
            content: "Ovde mozete dodati vasu ligu u favorite lige.",
            disableBeacon: true,
            data: { next: '/favorite', previous: '/' }
        },
        {
            target: ".step-8",
            disableBeacon: true,
            content: "Ovde mozete videti vase utakmice u favorite lige.",
            data: { previous: '/', next: '/favorite' }
        },
        {
            target: ".step-9",
            disableBeacon: true,
            content: "Ovde mozete ukljuciti/iskljuciti zvuk i kada padne gol da cujete vizualno.",
            data: { previous: '/favorite', next: `/statistics/${null}` }
        },
        {
            target: ".step-10",
            disableBeacon: true,
            content: "Ovde mozete videti detelje o utakmici.",
            data: { previous: `/favorite`, next: `/statistics/${null}` }
        },
        {
            target: ".step-11",
            disableBeacon: true,
            content: "Ovde mozete videti zadnje matcheve i head to head matchove ovih ekipa.",
            data: { previous: `/statistics/${null}`, next: `/statistics/${null}` }
        },
        {
            target: ".step-12",
            disableBeacon: true,
            content: "Ovde mozete videti zadnje matcheve i head to head matchove ovih ekipa.",
            data: { previous: `/statistics/${null}`, next: `/statistics/${null}` }
        },
        {
            target: ".step-13",
            disableBeacon: true,
            content: "Ovde mozete videti tabelu lige i mesto njihovo i top scores iz ove lige.",
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
