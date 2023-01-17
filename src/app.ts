import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import router from './Routes/router';

const app = express();

app.use(express.json());
app.use(router);
app.use(ErrorHandler.handle);

export default app;
