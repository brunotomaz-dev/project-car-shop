import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoutes = Router();

carRoutes.post('/', (req, res, next) => new CarsController(req, res, next).create());
carRoutes.get('/:id', (req, res, next) => new CarsController(req, res, next).find());
carRoutes.get('/', (req, res, next) => new CarsController(req, res, next).findAll());

export default carRoutes;