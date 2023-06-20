import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../models/ICategory";

const initialState: ICategory = null;

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const { actions, reducer } = categorySlice;
