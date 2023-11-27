import { Request, Response, NextFunction } from 'express';
import { JsonResponse } from '../../interfaces';
import { HttpStatusCodes } from '../enums';

function notImplementedHandler(
  req: Request<any, JsonResponse.IJsonResponse<any>, any>,
  res: Response<JsonResponse.IJsonResponse<any>>,
  next: NextFunction
) {
  res.status(HttpStatusCodes.NotImplemented).json({
    success: true,
    message: `This route [${req.originalUrl}] is not implemented yet`,
  });
}

export { notImplementedHandler };
