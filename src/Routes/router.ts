import { Router } from 'express';
import carRoutes from './carRoutes';

const router = Router();

router.use('/cars', carRoutes); 

export default router;
