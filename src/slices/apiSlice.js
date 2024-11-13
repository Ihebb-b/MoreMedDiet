import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
  baseQuery,
  reducerPath: "api",
  tagTypes: ["User"],
  endpoints: (builder) => ({

  }),
});