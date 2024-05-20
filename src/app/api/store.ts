import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { projectsAPI } from "./services/projectServices";

export const store = configureStore({
  reducer: {
    [projectsAPI.reducerPath]: projectsAPI.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(projectsAPI.middleware)
});
setupListeners(store.dispatch);