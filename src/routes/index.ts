import { Router } from 'express';

import page404 from './page404';
import mainController from './mainController';

const router = Router();

// .. routes

router.use(mainController);
router.use(page404);

export default router;
