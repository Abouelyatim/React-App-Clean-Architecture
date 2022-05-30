import { AuthState } from "../slices/AuthSlice";

export const LogInOutEvents = () => {
  const handleLogInOut = (state: AuthState) => {
    state.isLoggedIn = !state.isLoggedIn;
  };
  return {
    handleLogInOut,
  };
};
