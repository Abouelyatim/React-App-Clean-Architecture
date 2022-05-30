import NetworkServices from "./NetworkServices";
import NetworkDataSources from "./NetworkDataSources";
import UseCases from "./UseCases";

const cNetworkServices = NetworkServices();
const cNetworkDataSources = NetworkDataSources(
  cNetworkServices.MainNetworkServiceImpl
);
const cUseCase = UseCases(cNetworkDataSources.MainNetworkDataSourceImpl);

export default {
  GetBooksUseCase: cUseCase.GetBooksUseCase,
  InsertBookUseCase: cUseCase.InsertBookUseCase,
  DeleteBookUseCase: cUseCase.DeleteBookUseCase,
};
