import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarsODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema({
      model: { type: String, required: true },
      color: { type: String, required: true },
      year: { type: Number, required: true },
      buyValue: { type: Number, required: true },
      status: { type: Boolean, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super('Car', schema);
  }
}

export default CarsODM;