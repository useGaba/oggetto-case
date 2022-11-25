import { Router } from 'express';

import { wrap } from '../utils';
import { UsersController } from '../controllers';

const usersRouter = Router();

usersRouter
  .get(
    '/',
    wrap(async (req, res) => {

    }),
  )
  .get(
    '/:id',
    wrap(async (req, res) => {

    }),
  )
  .patch(
    '/:id',
    wrap(async (req, res) => {

    }),
  )
  .delete(
    '/:id',
    wrap(async (req, res) => {

    }),
  );

export { usersRouter };
