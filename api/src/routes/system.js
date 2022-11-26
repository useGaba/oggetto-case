import { Router } from 'express';

import { wrap } from '../utils';
import { SystemController } from '../controllers';

const systemRouter = Router();

systemRouter
  .get(
    '/',
    wrap(async (req, res) => {
      res.json(SystemController.getAppData());
    }),
  );

export { systemRouter };
