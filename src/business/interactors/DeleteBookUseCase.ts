import MainNetworkDataSource from "../datasource/network/MainNetworkDataSource";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Book from "../domain/Book";
import { handleUseCaseError } from "./HandleUseCaseException";

export default class DeleteBookUseCase {
  constructor(private readonly mainNetworkDataSource: MainNetworkDataSource) {}

  deleteBook = createAsyncThunk(
    "book/deleteBookUseCase",
    async (book: Book, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        return await this.mainNetworkDataSource.deleteBook(book);
      } catch (error: unknown) {
        return rejectWithValue(handleUseCaseError(error));
      }
    }
  );
}
