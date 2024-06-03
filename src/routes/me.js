import express from 'express';
import meController from '../app/controllers/meController.js';

const meRouter = express.Router();
meRouter.get('/stored', meController.stored);

export default meRouter;