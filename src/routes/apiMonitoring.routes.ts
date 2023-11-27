import { Router } from 'express';
import { APIMonitoringController } from '../controllers';

const apiMonitoringRouter = Router();

apiMonitoringRouter.route('/livez').get(APIMonitoringController.livez);

export { apiMonitoringRouter };
