import { Router } from 'express';
import app from '../app';

import { userLoginController } from '../controllers/controllers';

let router = Router();

router.get('/', (req, res) => res.json({}));
router.post('/userLogin', (req, res) => userLoginController.logUser(req, res));

export default router;