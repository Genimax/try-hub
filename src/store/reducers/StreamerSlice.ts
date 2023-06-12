import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStreamer } from "../../models/IStreamer";

const initialState: IStreamer = {
  found: false,
};

export const streamerSlice = createSlice({
  name: "streamer",
  initialState,
  reducers: {
    setStreamer(state, action: PayloadAction<IStreamer>) {
      state = action.payload;
    },
  },
});

export default streamerSlice.reducer;
