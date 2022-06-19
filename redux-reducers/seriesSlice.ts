import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux-store/store";
import { Entry } from "../definition/interface";

type seriesState = {
  series: Entry[];
};

const initialState: seriesState = {
  series: [
    {
      title: "",
      description: "",
      programType: "",
      images: {
        "Poster Art": {
          url: "",
          width: 0,
          height: 0,
        },
      },
      releaseYear: 0,
    },
  ],
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    addSeries(state, action: PayloadAction<Entry[]>) {
      // https://redux-toolkit.js.org/usage/immer-reducers
      // It is safe to assign the state directly within createReducers / createSlice
      // Since internally it uses Immers, which prevents state mutation
      state.series = action.payload;
    },
  },
});

export const { addSeries } = seriesSlice.actions;
export const selectMovies = (state: RootState): Entry[] =>
  state.serieList.series;

export default seriesSlice.reducer;
