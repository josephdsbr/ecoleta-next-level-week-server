import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import PointController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import { celebrate, Joi } from 'celebrate';

const routes = express.Router();
const upload = multer(multerConfig);

const pointController = new PointController();
const itemController = new ItemsController();

routes.get('/items', itemController.index);

routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }),
  pointController.create);

export default routes;
