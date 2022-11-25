import { Router } from 'express';

import { wrap } from '../utils';
import { AuthController } from '../controllers';

const authRouter = Router();

authRouter
  .post(
    '/login',
    wrap(async (req, res) => {
      const tokens = await AuthController.login(req.body);
      res.json(tokens);
    }),
  )
  .post(
    '/registration',
    wrap(async (req, res) => {
      const user = await AuthController.register(req.body);
      res.json(user);
    }),
  );

export { authRouter };
