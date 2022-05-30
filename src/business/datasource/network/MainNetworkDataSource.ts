import Book from "../../domain/Book";

export default interface MainNetworkDataSource {
  getBooks(): Promise<Book[]>;
  insertBook(book: Book): Promise<Book>;
  deleteBook(book: Book): Promise<Book>;
}
