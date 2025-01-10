import { baseApi } from "../api/baseApi";

const expenseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addExpensess: builder.mutation({
      query: (data) => ({
        url: `/expenses`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Expenses"],
    }),
    getExpenses: builder.query({
      query: () => ({
        url: `/expenses`,
        method: "GET",
      }),
      providesTags: ["Expenses"],
    }),
    getSingleExpenses: builder.query({
      query: (id) => ({
        url: `/expenses/${id}`,
        method: "GET",
        params: id,
      }),
      providesTags: ["Expenses"],
    }),
    // Update Expenses
    updateExpenses: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/expenses/${id}`,
        method: "PATCH",
        params: id,
        body: data,
      }),
      invalidatesTags: ["Expenses"],
    }),
  }),
});

export const {
  useAddExpensessMutation,
  useGetExpensesQuery,
  useGetSingleExpensesQuery,
  useUpdateExpensesMutation
} = expenseManagementApi;
