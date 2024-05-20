import { IProject } from "@/models/IProject";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsAPI = createApi({
  reducerPath: "projectsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/projects",
  }),
  endpoints: (builder) => ({
    fetchAllProjects: builder.query<IProject[], string>({
      query: () => ({
        url: '/projects'
      })
    }),
  }),
});
