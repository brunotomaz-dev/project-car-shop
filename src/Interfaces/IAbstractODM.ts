interface IAbstractODM<T> {
  create(car: T): Promise<T>;
}

export default IAbstractODM;