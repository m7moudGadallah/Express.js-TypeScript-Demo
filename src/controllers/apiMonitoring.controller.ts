import { Request, Response, NextFunction } from 'express';
import { JsonResponse } from '../interfaces';
import { HttpStatusCodes } from '../utils/enums';

class APIMonitoringController {
  /**
   * @route GET /api/livez
   * @access public
   * @description Ensure that API is live
   */
  public static async livez(
    req: Request<undefined, JsonResponse.IJsonResponse<any>, undefined>,
    res: Response<JsonResponse.IJsonResponse<any>>,
    next: NextFunction
  ) {
    res.status(HttpStatusCodes.OK).json({
      success: true,
      message: 'API is live! 🚀',
    });
  }
}

export { APIMonitoringController };
