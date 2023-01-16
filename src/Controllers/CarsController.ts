import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';

class CarController {
  private service: CarsService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.service = new CarsService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async create() {
    const bodyCar: ICar = this.req.body;
    try {
      const car = await this.service.create(bodyCar);

      this.res.status(201).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;