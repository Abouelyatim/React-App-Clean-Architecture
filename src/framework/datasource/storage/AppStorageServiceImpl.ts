import AppStorageSource from "../../../business/datasource/storage/AppStorageSource";
import AppStorageService from "./AppStorageService";

export default class AppStorageServiceImpl implements AppStorageService {
  constructor(private readonly storage: Storage) {}

  get(name: string): Promise<string | null> {
    return new Promise((resolve) => {
      resolve(this.storage.getItem(name));
    });
  }

  remove(name: string): void {
    this.storage.removeItem(name);
  }

  set(name: string, value: string): void {
    this.storage.setItem(name, value);
  }
}
