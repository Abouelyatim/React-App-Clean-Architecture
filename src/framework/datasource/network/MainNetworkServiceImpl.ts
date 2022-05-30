import MainNetworkService from "./MainNetworkService";
import Book from "../../../business/domain/Book";

export default class MainNetworkServiceImpl implements MainNetworkService {
  async getBooks(): Promise<Book[]> {
    const res = await fetch("http://localhost:3005/books");
    return await res.json();
  }

  async insertBook(book: Book): Promise<Book> {
    const res = await fetch("http://localhost:3005/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return await res.json();
  }

  async deleteBook(book: Book): Promise<Book> {
    await fetch(`http://localhost:3005/books/${book.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return book;
  }
}
