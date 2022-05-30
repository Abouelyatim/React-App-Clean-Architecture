import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Book from "../../../../business/domain/Book";
import { BookState } from "../slices/BookSlice";
import di from "../../../../di";

export const GetBooksEvents = () => {
  const getBooksEvent = createAsyncThunk(
    "book/getBooksEvent",
    async (_, thunkAPI) => {
      const { dispatch } = thunkAPI;
      dispatch(di.GetBooksUseCase.getBooks());
    }
  );

  const handlePending = (state: BookState) => {
    state.isLoading = true;
    state.error = null;
  };

  const handleFulfilled = (state: BookState, action: PayloadAction<Book[]>) => {
    state.isLoading = false;
    state.books = action.payload;
  };

  const handleRejected = (state: BookState, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.error = action.payload as string;
  };
  return {
    getBooksEvent,
    handlePending,
    handleFulfilled,
    handleRejected,
  };
};
