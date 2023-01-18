import { isValidObjectId, model, Model, models, Schema, UpdateQuery } from 'mongoose';
import IAbstractODM from '../Interfaces/IAbstractODM';
import HttpException, { StatusCodes } from '../utils/httpException';

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

  public async find(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw new HttpException(StatusCodes.UNPROCESSABLE_ENTITY, 'Invalid mongo id');
    }
    
    return this._model.findById(id);
  }

  public async findAll(): Promise<T[]> {
    return this._model.find();
  }

  public async update(id: string, data: T): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw new HttpException(StatusCodes.UNPROCESSABLE_ENTITY, 'Invalid mongo id');
    }

    return this._model.findByIdAndUpdate(
      id, 
      { ...data } as UpdateQuery<T>, 
      { new: true },
    );
  }
}

export default AbstractODM;