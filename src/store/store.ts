import { combineReducers, configureStore } from "@reduxjs/toolkit";
import streamerReducer from "./reducers/StreamerSlice";

const rootReducer = combineReducers({
  streamerReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
