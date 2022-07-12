import { Router } from 'express';
import customers from './CustomersRouter';

const routes = Router();

routes.use('/customers', customers );

export default routes;