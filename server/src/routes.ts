import express from 'express';

import JokesController from './controllers/JokesController';

const routes = express.Router();

const jokesController = new JokesController();
routes.get('/jokes', jokesController.index);
routes.post('/jokes', jokesController.create);

export default routes;