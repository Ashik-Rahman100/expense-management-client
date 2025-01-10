import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import expensesReducer from './feature/expenseSlice';
import limitsReducer from './feature/limitSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    limits: limitsReducer,
    expenses: expensesReducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
