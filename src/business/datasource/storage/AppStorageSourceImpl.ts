import AppStorageSource from "./AppStorageSource";
import AppStorageService from "../../../framework/datasource/storage/AppStorageService";

export default class AppStorageSourceImpl implements AppStorageSource {
  constructor(private readonly appStorageService: AppStorageService) {}

  get(name: string): Promise<string | null> {
    return this.appStorageService.get(name);
  }

  remove(name: string): void {
    this.appStorageService.remove(name);
  }

  set(name: string, value: string): void {
    this.appStorageService.set(name, value);
  }
}
