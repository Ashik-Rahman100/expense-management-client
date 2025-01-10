// src/features/expensesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const { category, amount } = action.payload;
      const totalCategoryAmount = state
        .filter((expense) => expense.category === category)
        .reduce((total, expense) => total + expense.amount, 0);

      if (totalCategoryAmount + amount <= action.payload.limit) {
        state.push(action.payload);
      }
    },
  },
});

export const { addExpense } = expensesSlice.actions;

export default expensesSlice.reducer;
