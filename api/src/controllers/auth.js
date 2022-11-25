import { AlreadyExist, BadRequest } from 'http-errors';

import { UsersController } from './index';
import { User } from '../models';
import { comparePasswords, generateAccessToken, generateRefreshToken } from '../utils';

async function login({ email, password }) {
  const user = await User.findOneOrFail({ email });

  if (!await comparePasswords(password, user.password)) {
    throw new BadRequest('invalid_login_or_password');
  }

  return {
    access: generateAccessToken(user.id, user.role),
    refresh: generateRefreshToken(user.id, user.role),
  };
}

async function register({ email, password, name }) {
  let user = await User.findOne({ where: { email } });
  if (user) throw new AlreadyExist('User already exist');
  user = await UsersController.createUser({ email, password, name });
  return user;
}

async function refresh() {

}

export {
  login,
  register,
};
