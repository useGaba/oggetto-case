import { Forbidden, BadRequest } from 'http-errors';
import { verifyToken } from '../utils';
import { User } from '../models';

export function authenticateToken(allowedRoles = []) {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      next(new BadRequest('invalid_token'), null);
    }

    try {
      req.user = verifyToken(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      next(error, null);
    }

    if (!allowedRoles.includes(req.user?.role)) next(new Forbidden('forbidden_action'), null);

    req.user = await User.findOneOrFail({ id: req.user.id });

    next();
  };
}
