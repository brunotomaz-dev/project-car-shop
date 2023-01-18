import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorcyclesService';

class MotorcyclesController {
  req: Request;
  res: Response;
  next: NextFunction;
  service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async createMotorcycle() {
    const motorcycle = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      buyValue: this.req.body.buyValue,
      status: this.req.body.status || false,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const motorcycleCreated = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).send(motorcycleCreated);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;