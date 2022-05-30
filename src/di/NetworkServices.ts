import INetworkService from "./interfaces/INetworkService";
import MainNetworkServiceImpl from "../framework/datasource/network/MainNetworkServiceImpl";

export default (): INetworkService => {
  return {
    MainNetworkServiceImpl: new MainNetworkServiceImpl(),
  };
};
