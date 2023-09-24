import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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
      console.log(data);
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
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      .addCase(getLeague.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLeague.fulfilled, (state, action) => {
        state.loading = false;
        state.leagueData = action.payload;
      })
      .addCase(getLeague.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default footballSlice;
