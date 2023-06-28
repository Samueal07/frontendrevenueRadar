import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponses,
  GetProductResponse,
  GetTransactionsResponse,
} from "./types";

// using redux js create query
// make api to call data from backend
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  // name for this api call
  reducerPath: "main",
  // name of each api data
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    // localhost/kpi/kpis pe call
    // this is the api call made
    //<responsewewant,>

    //READ REQUEST SO WE USE >QUERYs
    getKpis: build.query<Array<GetKpisResponses>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    // another api call
    // getKpis2: build.query<void, void>({
    //   query: () => "kpi/kpis2/",
    //   providesTags: ["Kpis"],
    // }),

    // API CALL for Product
    // its A
    getProducts: build.query<Array<GetProductResponse>, void>({
      query: () => "product/products/",
      providesTags: ["Products"],
    }),

    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions/",
      providesTags: ["Transactions"],
    }),
  }),
});
// getKpis
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
