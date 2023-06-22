import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as streamer } from "./slices/streamerSlice";
import { reducer as category } from "./slices/gameSlice";
import { reducer as results } from "./slices/resultsSlice";

const reducers = combineReducers({ streamer, category, results });

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
