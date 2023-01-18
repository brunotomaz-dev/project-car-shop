import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcyclesODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema({
      model: { type: String, required: true },
      color: { type: String, required: true },
      year: { type: Number, required: true },
      buyValue: { type: Number, required: true },
      status: { type: Boolean, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super('Motorcycle', schema);
  }
}

export default MotorcyclesODM;