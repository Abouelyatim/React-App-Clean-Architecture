import Book from "../../../business/domain/Book";

export default interface MainNetworkService {
  getBooks(): Promise<Book[]>;
  insertBook(book: Book): Promise<Book>;
  deleteBook(book: Book): Promise<Book>;
}
