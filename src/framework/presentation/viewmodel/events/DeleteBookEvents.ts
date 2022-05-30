import { BookState } from "../slices/BookSlice";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Book from "../../../../business/domain/Book";
import di from "../../../../di";

export const DeleteBookEvents = () => {
  const deleteBookEvent = createAsyncThunk(
    "book/deleteBookEvent",
    async (book: Book, thunkAPI) => {
      const { dispatch } = thunkAPI;
      dispatch(di.DeleteBookUseCase.deleteBook(book));
    }
  );

  const handlePending = (state: BookState) => {
    state.isLoading = true;
    state.error = null;
  };

  const handleFulfilled = (state: BookState, action: PayloadAction<Book>) => {
    state.isLoading = false;
    state.books = state.books.filter((book) => book.id !== action.payload.id);
  };

  const handleRejected = (state: BookState, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.error = action.payload as string;
  };
  return {
    deleteBookEvent,
    handlePending,
    handleFulfilled,
    handleRejected,
  };
};
