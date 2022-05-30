import DeleteBookUseCase from "../../business/interactors/DeleteBookUseCase";
import GetBooksUseCase from "../../business/interactors/GetBooksUseCase";
import InsertBookUseCase from "../../business/interactors/InsertBookUseCase";

export default interface IUseCases {
  GetBooksUseCase: GetBooksUseCase;
  InsertBookUseCase: InsertBookUseCase;
  DeleteBookUseCase: DeleteBookUseCase;
}
