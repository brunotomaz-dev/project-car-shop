import { NextFunction, Request, Response } from 'express';
import HttpException, { StatusCodes } from '../utils/httpException';

class ErrorHandler {
  public static handle(
    error: HttpException,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.status || StatusCodes.INTERNAL_SERVER).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;