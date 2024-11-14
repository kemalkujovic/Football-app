import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    run: true,
    stepIndex: 0,
    steps: [
        {
            target: ".step-1",
            content: "Ovo su vase favorite lige",
            disableBeacon: true
        },
        {
            target: ".step-2",
            content: "Ovde možete pronaći sve lige drzava.",
            disableBeacon: true
        },
        {
            target: ".step-3",
            content: "Ovde mozete videti sve utakmice za danasnji dan.",
            disableBeacon: true
        },
        {
            target: ".step-4",
            content: "Ovde mozete videti utakmice za naredne datume.",
            disableBeacon: true
        },
        {
            target: ".step-5",
            content: "Ovde mozete videti sve utakmice koje se trenutno igraju.",
            disableBeacon: true
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
            content: "Ovde mozete videti vase utakmice u favorite lige.",
            data: { previous: '/', next: '/favorite' }
        },
        {
            target: ".step-9",
            content: "Ovde mozete ukljuciti/iskljuciti zvuk i kada padne gol da cujete vizualno.",
            data: { previous: '/', next: '/favorite' }
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
    },
});
export const { startTour, stopTour, nextStep, resetTour, previousStep } = joyrideSlice.actions;
export default joyrideSlice;
