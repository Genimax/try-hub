import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as streamer } from "./slices/streamerSlice";

const reducers = combineReducers({ streamer });

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
