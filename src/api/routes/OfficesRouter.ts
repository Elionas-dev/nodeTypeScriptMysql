import express from 'express';
import {Router} from 'express';
import * as controller from '../controllers/OfficesController';


const router = express.Router();

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.create);

router.put('/:id',  controller.updateById);

router.delete('/:id', controller.deleteById);

export default router;