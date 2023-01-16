import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const router = Router();

router.post(
  '/cars', 
  (req, res, next) => new CarsController(req, res, next).create(),
);

export default router;
