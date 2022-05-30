import { createSlice } from "@reduxjs/toolkit";
import di from "../../../../di";
import Book from "../../../../business/domain/Book";
import { GetBooksEvents } from "../events/GetBooksEvents";
import { InsertBookEvents } from "../events/InsertBookEvents";
import { DeleteBookEvents } from "../events/DeleteBookEvents";
import { ReadBookEvents } from "../events/ReadBookEvents";

export interface BookState {
  books: Book[];
  readingBook: Book | null;
  isLoading: boolean;
  error: string | null;
}

const initState: BookState = {
  books: [],
  readingBook: null,
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initState,
  reducers: {
    readBookEvent: ReadBookEvents().handReadBook,
  },
  extraReducers: (builder) => {
    //get books
    builder.addCase(
      di.GetBooksUseCase.getBooks.pending,
      GetBooksEvents().handlePending
    );
    builder.addCase(
      di.GetBooksUseCase.getBooks.fulfilled,
      GetBooksEvents().handleFulfilled
    );
    builder.addCase(
      di.GetBooksUseCase.getBooks.rejected,
      GetBooksEvents().handleRejected
    );

    //insert book
    builder.addCase(
      di.InsertBookUseCase.insertBook.pending,
      InsertBookEvents().handlePending
    );
    builder.addCase(
      di.InsertBookUseCase.insertBook.fulfilled,
      InsertBookEvents().handleFulfilled
    );
    builder.addCase(
      di.InsertBookUseCase.insertBook.rejected,
      InsertBookEvents().handleRejected
    );

    //delete book
    builder.addCase(
      di.DeleteBookUseCase.deleteBook.pending,
      DeleteBookEvents().handlePending
    );
    builder.addCase(
      di.DeleteBookUseCase.deleteBook.fulfilled,
      DeleteBookEvents().handleFulfilled
    );
    builder.addCase(
      di.DeleteBookUseCase.deleteBook.rejected,
      DeleteBookEvents().handleRejected
    );
  },
});

export const { readBookEvent } = bookSlice.actions;
export default bookSlice.reducer;
