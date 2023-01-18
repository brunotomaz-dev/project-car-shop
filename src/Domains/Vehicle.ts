import IVehicle from '../Interfaces/IVehicle';

abstract class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected color: string;
  protected year: number;
  protected buyValue: number;
  protected status: boolean;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.color = vehicle.color;
    this.year = vehicle.year;
    this.buyValue = vehicle.buyValue;
    this.status = vehicle.status || false;
  }
}

export default Vehicle;