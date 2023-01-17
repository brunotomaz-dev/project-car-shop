import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';

class CarsController {
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
    const bodyCar: ICar = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status || false,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const car = await this.service.create(bodyCar);

      return this.res.status(201).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarsController;