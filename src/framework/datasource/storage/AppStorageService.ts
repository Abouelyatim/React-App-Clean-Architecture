export default interface AppStorageService {
  get(name: string): Promise<string | null>;
  set(name: string, value: string): void;
  remove(name: string): void;
}
