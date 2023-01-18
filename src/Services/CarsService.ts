import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';
import HttpException, { StatusCodes } from '../utils/httpException';

class CarsService {
  private _carsODM: CarsODM;

  constructor(private carsODM?: CarsODM) {
    this._carsODM = carsODM || new CarsODM();
  }

  private createCarDomain(car: ICar): Car {
    return new Car(car);
  }

  public async create(car: ICar): Promise<Car> {
    const carCreated = await this._carsODM.create(car);

    if (!carCreated) throw new HttpException(StatusCodes.UNPROCESSABLE_ENTITY, 'Car not created');

    return this.createCarDomain(carCreated);
  }

  public async find(id: string): Promise<Car> {
    const carFound = await this._carsODM.find(id);

    if (carFound === null) throw new HttpException(StatusCodes.NOT_FOUND, 'Car not found');

    return this.createCarDomain(carFound);
  }

  public async findAll(): Promise<Car[]> {
    const carsFound = await this._carsODM.findAll();

    return carsFound.map((car) => this.createCarDomain(car));
  }

  public async update(id: string, car: ICar): Promise<Car> {
    const carUpdated = await this._carsODM.update(id, car);

    if (carUpdated === null) throw new HttpException(StatusCodes.NOT_FOUND, 'Car not found');

    return this.createCarDomain(carUpdated);
  }
}

export default CarsService;