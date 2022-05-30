import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logInOutEvent } from "../viewmodel/slices/AuthSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.AuthSlice);
  const { error } = useAppSelector((state) => state.BookSlice);

  const handleLogInOut = () => {
    dispatch(logInOutEvent());
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )}

      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={handleLogInOut}
        >
          {isLoggedIn ? "log Out" : "log In"}
        </button>
      </nav>
    </>
  );
};

export default Header;
