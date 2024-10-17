import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneById } from ".";

export const getHeadphoneById = createAsyncThunk(
  "headphones/getHeadphoneById",
  async (headphoneId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/product/${headphoneId}`
    );

    const result = await response.json();

    if (!result) {
      rejectWithValue("no data");
      return;
    }

    return result;
  },
  {
    condition: (headphoneId, { getState }) => {
      return !selectHeadphoneById(getState(), headphoneId);
    },
  }
);
