import { Application, Router } from 'express';
import { apiMonitoringRouter } from './apiMonitoring.routes';
import { postsRouter } from './posts.routes';

const apiRouter = Router();

apiRouter.use('/api', apiMonitoringRouter);
apiRouter.use('/api/posts', postsRouter);

export function loadRoutes(app: Application) {
  app.use(apiRouter);
}
