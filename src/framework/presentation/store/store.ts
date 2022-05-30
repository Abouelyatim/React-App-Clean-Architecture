import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../viewmodel/slices/BookSlice";
import AuthSlice from "../viewmodel/slices/AuthSlice";
import ReportSlice from "../viewmodel/slices/ReportSlice";

export const store = configureStore({
  reducer: { BookSlice, AuthSlice, ReportSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
