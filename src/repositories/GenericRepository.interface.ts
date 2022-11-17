export default interface GenericRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: number): Promise<T>;
  create(entity: T): Promise<T>;
  updateById(entity: T): Promise<boolean>;
  deleteById(id: number): Promise<boolean>;
}
