import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnswerPayload, IResults } from "../../models/IResult";

const initialState: IResults = {
  question: 1,
  stats: {},
  currentAnswers: {},
  isSubscriber: {},
  currentTimestamp: Date.now(),
};

export const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setReset: (state) => {
      // EVERY NEW SESSION
      return initialState;
    },
    setNewAnswer: (state, action: PayloadAction<IAnswerPayload>) => {
      if (!state.currentAnswers[action.payload.username]) {
        // EVERY NEW ANSWER
        state.currentAnswers[action.payload.username] = action.payload.answer;
        state.isSubscriber[action.payload.username] =
          action.payload.isSubscriber;

        // LAZIEST PLAYER UPDATING
        if (
          !state.laziestPlayer ||
          state.laziestPlayer.time < Date.now() - state.currentTimestamp
        ) {
          state.laziestPlayer = {
            username: action.payload.username,
            time: Date.now() - state.currentTimestamp,
          };
        }

        // FASTEST PLAYER UPDATING
        if (
          !state.fastestPlayer ||
          state.fastestPlayer.time > Date.now() - state.currentTimestamp
        ) {
          state.fastestPlayer = {
            username: action.payload.username,
            time: Date.now() - state.currentTimestamp,
          };
        }
      }
    },

    setNextRound: (state, action: PayloadAction<boolean>) => {
      Object.keys(state.currentAnswers).forEach((key: string) => {
        if (state.currentAnswers[key] === action.payload) {
          if (state.stats[key]) {
            state.stats[key] += 1;
          } else {
            state.stats[key] = 1;
          }
        } else if (!state.stats[key]) {
          state.stats[key] = 0;
        }
      });

      state.question += 1;
      state.currentAnswers = {};
      state.currentTimestamp = Date.now();
    },
  },
});

export const { actions, reducer } = resultsSlice;
