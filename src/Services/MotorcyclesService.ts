import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotorcyclesService {
  private _motorcyclesODM: MotorcyclesODM;

  constructor(private motorcyclesODM?: MotorcyclesODM) {
    this._motorcyclesODM = motorcyclesODM || new MotorcyclesODM();
  }

  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public async createMotorcycle(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const motorcycleDB = await this._motorcyclesODM.create(motorcycle);
    return this.createMotorcycleDomain(motorcycleDB);
  }
}

export default MotorcyclesService;