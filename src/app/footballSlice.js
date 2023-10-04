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
        `https://apiv3.apifootball.com/?action=get_events&from=${days.lastTenDays}&to=${days.danasnjiDatum}&league_id=${api}&APIkey=${APIkey}`
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

export const leagueTopScores = createAsyncThunk(
  "football/leagueTopScores",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_topscorers&league_id=${api}&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const leagueFixtures = createAsyncThunk(
  "football/leagueFixtures",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_events&from=${days.danasnjiDatum}&to=${days.sledeciDan}&league_id=${api}&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export const getLiveMatch = createAsyncThunk(
  "football/getLiveMatch",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_events&match_live=1&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export const getAllMatch = createAsyncThunk(
  "football/getAllMatch",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_events&from=${api}&to=${api}&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getStatistics = createAsyncThunk(
  "football/getStatistics",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_events&match_id=${api}&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getH2H = createAsyncThunk(
  "football/getH2H",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${api.homeId}&secondTeamId=${api.awayId}&APIkey=${APIkey}`
      );
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
export const getOddsMatch = createAsyncThunk(
  "football/getOddsMatch",
  async (api, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://apiv3.apifootball.com/?action=get_odds&match_id=${api}&APIkey=${APIkey}`
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
    fixtureMatches: [],
    leagueTopScores: [],
    getAllMatch: [],
    liveMatch: [],
    getStatistics: [],
    getH2H: [],
    getOddsMatch: [],
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
      })
      // Fixture matches
      .addCase(leagueFixtures.pending, (state) => {
        state.loading = true;
      })
      .addCase(leagueFixtures.fulfilled, (state, action) => {
        state.loading = false;
        state.fixtureMatches = action.payload;
      })
      .addCase(leagueFixtures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // League Top Scores
      .addCase(leagueTopScores.pending, (state) => {
        state.loading = true;
      })
      .addCase(leagueTopScores.fulfilled, (state, action) => {
        state.loading = false;
        state.leagueTopScores = action.payload;
      })
      .addCase(leagueTopScores.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Live Match
      .addCase(getLiveMatch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLiveMatch.fulfilled, (state, action) => {
        state.loading = false;
        state.liveMatch = action.payload;
      })
      .addCase(getLiveMatch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // getAllMatch
      .addCase(getAllMatch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMatch.fulfilled, (state, action) => {
        state.loading = false;
        state.getAllMatch = action.payload;
      })
      .addCase(getAllMatch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get staticts match
      .addCase(getStatistics.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.getStatistics = action.payload;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get H2H matches
      .addCase(getH2H.pending, (state) => {
        state.loading = true;
      })
      .addCase(getH2H.fulfilled, (state, action) => {
        state.loading = false;
        state.getH2H = action.payload;
      })
      .addCase(getH2H.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get odds for match getOddsMatch
      .addCase(getOddsMatch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOddsMatch.fulfilled, (state, action) => {
        state.loading = false;
        state.getOddsMatch = action.payload;
      })
      .addCase(getOddsMatch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default footballSlice;
