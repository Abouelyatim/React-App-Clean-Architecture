import MainNetworkDataSource from "./MainNetworkDataSource";
import Book from "../../domain/Book";
import MainNetworkService from "../../../framework/datasource/network/MainNetworkService";

export default class MainNetworkDataSourceImpl
  implements MainNetworkDataSource
{
  constructor(private readonly mainNetworkService: MainNetworkService) {}

  async getBooks(): Promise<Book[]> {
    return this.mainNetworkService.getBooks().then((book) => book);
  }

  insertBook(book: Book): Promise<Book> {
    return this.mainNetworkService.insertBook(book);
  }

  deleteBook(book: Book): Promise<Book> {
    return this.mainNetworkService.deleteBook(book);
  }
}
