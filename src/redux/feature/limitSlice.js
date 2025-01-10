// src/features/limitsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Groceries: 0,
  Transportation: 0,
  Healthcare: 0,
  Utility: 0,
  Charity: 0,
  Miscellaneous: 0,
};

const limitsSlice = createSlice({
  name: 'limits',
  initialState,
  reducers: {
    setLimits: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setLimits } = limitsSlice.actions;

export default limitsSlice.reducer;
