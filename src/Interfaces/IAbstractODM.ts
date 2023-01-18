interface IAbstractODM<T> {
  create(car: T): Promise<T>;
  find(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  update(id: string, obj: T): Promise<T | null>;
}

export default IAbstractODM;