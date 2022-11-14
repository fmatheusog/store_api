export default interface GenericRepository {
  findAll<T>(): Promise<T[]>;
  findById<T>(id: number): Promise<T>;
  create<T>(entity: T): Promise<T>;
  updateById<T>(entity: T): Promise<boolean>;
  deleteById(id: number): Promise<boolean>;
}
