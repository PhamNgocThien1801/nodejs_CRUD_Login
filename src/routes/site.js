import express from 'express';
import SitesController from '../app/controllers/SitesController.js';

const routerSite = express.Router();
routerSite.get('/search', SitesController.search);
routerSite.get('/', SitesController.home);
export default routerSite;