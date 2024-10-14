import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectHeadphoneById: (state, id) => state.entities[id],
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphonesRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphones.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getHeadphones.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getHeadphones.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const {
  selectHeadphoneById,
  selectHeadphonesIds,
  selectHeadphonesRequestStatus,
} = headphonesSlice.selectors;
