import { configureStore } from "@reduxjs/toolkit";
import programReducer from "../redux-reducers/programSlice";
import moviesReducer from "../redux-reducers/moviesSlice";
import seriesReducer from "../redux-reducers/seriesSlice";

const store = configureStore({
  reducer: {
    program: programReducer,
    movieList: moviesReducer,
    serieList: seriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
