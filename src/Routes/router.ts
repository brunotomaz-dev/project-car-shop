import { Router } from 'express';
import carRoutes from './carRoutes';
import motorcyclesRouter from './motorcyclesRoutes';

const router = Router();

router.use('/cars', carRoutes);
router.use('/motorcycles', motorcyclesRouter);

export default router;
