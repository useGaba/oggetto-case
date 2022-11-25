import { BadRequest } from 'http-errors';

import { UsersController } from './index';
import { User } from '../models';
import { comparePasswords, generateAccessToken } from '../utils';

async function login({ email, password }) {
  const user = await User.findOneOrFail({ email });

  if (!await comparePasswords(password, user.password)) {
    throw new BadRequest('invalid_login_or_password');
  }

  return {
    access: generateAccessToken(user.id, user.role),
  };
}

async function register({
  email, password, name, birthday, position, grade, workProject, phone,
}) {
  let user = await User.findOne({ where: { email } });
  if (user) throw new BadRequest('User already exist');
  user = await UsersController.createUser({
    email, password, name, birthday, position, grade, workProject, phone,
  });
  return user;
}

// TODO make reset password feature

export {
  login,
  register,
};
