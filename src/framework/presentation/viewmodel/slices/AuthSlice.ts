import { createSlice } from "@reduxjs/toolkit";
import { LogInOutEvents } from "../events/LogInOutEvents";

export interface AuthState {
  isLoggedIn: boolean;
  name: string;
}

const initState: AuthState = {
  isLoggedIn: false,
  name: "ibrahim",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    logInOutEvent: LogInOutEvents().handleLogInOut,
  },
});

export const { logInOutEvent } = authSlice.actions;
export default authSlice.reducer;
