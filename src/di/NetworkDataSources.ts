import MainNetworkService from "../framework/datasource/network/MainNetworkService";
import MainNetworkDataSourceImpl from "../business/datasource/network/MainNetworkDataSourceImpl";
import INetworkDataSources from "./interfaces/INetworkDataSources";

export default (
  mainNetworkService: MainNetworkService
): INetworkDataSources => {
  return {
    MainNetworkDataSourceImpl: new MainNetworkDataSourceImpl(
      mainNetworkService
    ),
  };
};
