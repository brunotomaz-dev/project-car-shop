import ICar from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private color: string;
  private year: number;
  private buyValue: number;
  private status: boolean;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.color = car.color;
    this.year = car.year;
    this.buyValue = car.buyValue;
    this.status = car.status || false;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

export default Car;