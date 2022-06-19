import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux-store/store";
import { Programs } from "../definition/interface";

type programState = {
  programs: Programs;
};

const initialState: programState = {
  programs: {
    total: 0,
    entries: [
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
  },
};

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    addPrograms(state, action: PayloadAction<Programs>) {
      // https://redux-toolkit.js.org/usage/immer-reducers
      // It is safe to assign the state directly within createReducers / createSlice
      // Since internally it uses Immers, which prevents state mutation
      state.programs = action.payload;
    },
  },
});

export const { addPrograms } = programSlice.actions;
export const selectPrograms = (state: RootState): Programs =>
  state.program.programs;

export default programSlice.reducer;
