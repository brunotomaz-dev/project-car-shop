import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

class CarsService {
  private _carsODM: CarsODM;

  constructor(private carsODM?: CarsODM) {
    this._carsODM = carsODM || new CarsODM();
  }

  private createCarDomain(car: ICar | null): Car | null {
    if (!car) return null;

    return new Car(car);
  }

  public async create(car: ICar) {
    const carCreated = await this._carsODM.create(car);

    return this.createCarDomain(carCreated);
  }
}

export default CarsService;