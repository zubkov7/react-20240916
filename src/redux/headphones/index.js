import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../constants/normalized-mock";

const initialState = {
  entities: normalizedHeadphones.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedHeadphones.map(({ id }) => id),
};

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState,
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
  },
});

export const { selectHeadphonesIds, selectHeadphoneById } =
  headphonesSlice.selectors;
