// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "expense_tracker",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expensetracker-five-alpha.vercel.app/api",
  }),
  tagTypes: ["Expenses"],
  endpoints: (builder) => ({}),
});


