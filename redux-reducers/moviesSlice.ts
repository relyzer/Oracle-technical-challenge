import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux-store/store";
import { Entry } from "../definition/interface";

type moviesState = {
  movies: Entry[];
};

const initialState: moviesState = {
  movies: [
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

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action: PayloadAction<Entry[]>) {
      // https://redux-toolkit.js.org/usage/immer-reducers
      // It is safe to assign the state directly within createReducers / createSlice
      // Since internally it uses Immers, which prevents state mutation
      state.movies = action.payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;
export const selectMovies = (state: RootState): Entry[] =>
  state.movieList.movies;

export default moviesSlice.reducer;
