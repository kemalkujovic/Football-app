import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { lastDays } from "../util/helper";
const days = lastDays();

const APIkey =
  "8e65fed9ff5ee695c483f88affb3575f58e67eaa9cdc096d6ceb9bd36e166691";
const baseURL = "https://apiv3.apifootball.com/";

export const getFootball = createAsyncThunk(
  "football/getResults",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(api);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getLeague = createAsyncThunk(
  "football/getLeague",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${baseURL}?action=get_leagues&country_id=${api}&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const leagueResults = createAsyncThunk(
  "football/leagueResults",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_events&from=${days.jucerasnjiDatum}&to=${days.danasnjiDatum}&league_id=${api}&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export const leagueStandings = createAsyncThunk(
  "football/leagueStandings",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_standings&league_id=${api}&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const footballSlice = createSlice({
  name: "football",
  initialState: {
    footballData: [],
    leagueData: [],
    leagueResults: [],
    leagueStandings: [],
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Coutrys
      .addCase(getFootball.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFootball.fulfilled, (state, action) => {
        state.loading = false;
        state.footballData = action.payload;
      })
      .addCase(getFootball.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get Country Leagues
      .addCase(getLeague.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLeague.fulfilled, (state, action) => {
        state.loading = false;
        const newLeagueData = action.payload.filter(
          (newDataItem) =>
            !state.leagueData.some(
              (existingDataItem) =>
                existingDataItem.country_id === newDataItem.country_id
            )
        );
        state.leagueData = [...state.leagueData, ...newLeagueData];
      })
      .addCase(getLeague.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // League Reulsts
      .addCase(leagueResults.pending, (state) => {
        state.loading = true;
      })
      .addCase(leagueResults.fulfilled, (state, action) => {
        state.loading = false;
        state.leagueResults = action.payload;
      })
      .addCase(leagueResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // League Standings (tablea)
      .addCase(leagueStandings.pending, (state) => {
        state.loading = true;
      })
      .addCase(leagueStandings.fulfilled, (state, action) => {
        state.loading = false;
        state.leagueStandings = action.payload;
      })
      .addCase(leagueStandings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default footballSlice;
