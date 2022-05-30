import { BookState } from "../slices/BookSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import Book from "../../../../business/domain/Book";

export const ReadBookEvents = () => {
  const handReadBook = (state: BookState, action: PayloadAction<Book>) => {
    state.readingBook = action.payload;
  };
  return {
    handReadBook,
  };
};
