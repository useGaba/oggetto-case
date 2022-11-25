import { Forbidden } from 'http-errors';
import { verifyToken } from '../utils';

export function authenticateToken(allowedRoles = []) {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    try {
      req.user = verifyToken(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      next(error, null);
    }

    if (!allowedRoles.includes(req.user?.role)) next(new Forbidden('forbidden_action'), null);

    next();
  };
}
