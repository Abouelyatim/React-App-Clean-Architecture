import { BookState } from "../slices/BookSlice";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Book from "../../../../business/domain/Book";
import di from "../../../../di";

export const InsertBookEvents = () => {
  const insertBookEvent = createAsyncThunk(
    "book/insertBookEvent",
    async (book: Book, thunkAPI) => {
      const { dispatch } = thunkAPI;
      dispatch(di.InsertBookUseCase.insertBook(book));
    }
  );

  const handlePending = (state: BookState) => {
    state.isLoading = true;
    state.error = null;
  };

  const handleFulfilled = (state: BookState, action: PayloadAction<Book>) => {
    state.books.push(action.payload);
    state.isLoading = false;
  };

  const handleRejected = (state: BookState, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.error = action.payload as string;
  };
  return {
    insertBookEvent,
    handlePending,
    handleFulfilled,
    handleRejected,
  };
};
