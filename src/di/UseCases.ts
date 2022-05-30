import MainNetworkDataSource from "../business/datasource/network/MainNetworkDataSource";
import GetBooksUseCase from "../business/interactors/GetBooksUseCase";
import IUseCases from "./interfaces/IUseCases";
import InsertBookUseCase from "../business/interactors/InsertBookUseCase";
import DeleteBookUseCase from "../business/interactors/DeleteBookUseCase";

export default (mainNetworkDataSource: MainNetworkDataSource): IUseCases => {
  return {
    GetBooksUseCase: new GetBooksUseCase(mainNetworkDataSource),
    InsertBookUseCase: new InsertBookUseCase(mainNetworkDataSource),
    DeleteBookUseCase: new DeleteBookUseCase(mainNetworkDataSource),
  };
};
