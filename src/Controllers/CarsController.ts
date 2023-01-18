import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';
import { StatusCodes } from '../utils/httpException';

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

      return this.res.status(StatusCodes.CREATED).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    const { id } = this.req.params;
    try {
      const car = await this.service.find(id);

      return this.res.status(StatusCodes.OK).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    try {
      const cars = await this.service.findAll();

      return this.res.status(StatusCodes.OK).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const bodyCar: ICar = {
      model: this.req.body.model,
      color: this.req.body.color,
      year: this.req.body.year,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const car = await this.service.update(id, bodyCar);

      return this.res.status(StatusCodes.OK).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarsController;