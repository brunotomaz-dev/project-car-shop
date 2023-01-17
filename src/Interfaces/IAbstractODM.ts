interface IAbstractODM<T> {
  create(car: T): Promise<T>;
  find(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}

export default IAbstractODM;