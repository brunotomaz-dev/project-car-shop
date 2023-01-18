import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const motorcyclesRouter = Router();

motorcyclesRouter.post(
  '/', 
  (req, res, next) => new MotorcyclesController(req, res, next).createMotorcycle(),
);

export default motorcyclesRouter;