import { Router } from 'express';

import { wrap } from '../utils';
import { AuthController } from '../controllers';
import { authenticateToken, validateRequest } from '../middlewares';
import { roles } from '../constants';
import { login, registration } from '../requests';

const authRouter = Router();

authRouter
  .post(
    '/login',
    validateRequest(login),
    wrap(async (req, res) => {
      const tokens = await AuthController.login(req.body);
      res.json(tokens);
    }),
  )
  .post(
    '/registration',
    authenticateToken([roles.admin]),
    validateRequest(registration),
    wrap(async (req, res) => {
      const user = await AuthController.register(req.body);
      res.json(user);
    }),
  );

export { authRouter };
