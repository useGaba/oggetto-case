import { Router } from 'express';

import { wrap } from '../utils';
import { AuthController } from '../controllers';
import { authenticateToken, validateRequest } from '../middlewares';
import { roles } from '../constants';
import { login, registration } from '../requests';
import { sendMail } from '../services';

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
      sendMail(req.body.email, 'registration', req.body);
      res.json(user);
    }),
  )
  .patch(
    '/password',
    authenticateToken([roles.user, roles.admin]),
    wrap(async (req, res) => {
      await AuthController.changePassword(req.user, req.body);
      res.status(200).end();
    }),
  );

export { authRouter };
