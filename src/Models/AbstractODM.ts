import { model, Model, models, Schema } from 'mongoose';
import IAbstractODM from '../Interfaces/IAbstractODM';

abstract class AbstractODM<T> implements IAbstractODM<T> {
  protected _model: Model<T>;
  protected _schema: Schema;
  protected _name: string;

  constructor(name: string, schema: Schema) {
    this._name = name;
    this._schema = schema;
    this._model = models[this._name] || model(this._name, this._schema);
  }

  public async create(data: T): Promise<T> {
    return this._model.create({ ...data });
  } 
}

export default AbstractODM;