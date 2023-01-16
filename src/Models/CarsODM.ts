import { Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import ICarODM from '../Interfaces/ICarODM';

class CarsODM implements ICarODM {
  protected _model: Model<ICar>;
  protected _schema: Schema;
  
  constructor() {
    this._schema = new Schema({
      model: { type: String, required: true },
      color: { type: String, required: true },
      year: { type: Number, required: true },
      buyValue: { type: Number, required: true },
      status: { type: Boolean, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this._model = models.Car || model<ICar>('Car', this._schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this._model.create({ ...car });
  }
}

export default CarsODM;