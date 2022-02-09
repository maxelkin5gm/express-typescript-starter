import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/exceptions/HttpException';

export function httpExceptionHandler(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.status(error.httpStatus).json(error.JSON);
}

export function errorHandler(
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.status(500).send();
}
