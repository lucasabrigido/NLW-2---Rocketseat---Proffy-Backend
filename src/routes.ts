import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const router = express.Router();
const classesControllers = new ClassesController();
const connectionController = new ConnectionsController();


router.post('/classes', classesControllers.create);
router.get('/classes', classesControllers.index);
router.post('/connections', connectionController.create);
router.get('/connections', connectionController.index);

export default router;