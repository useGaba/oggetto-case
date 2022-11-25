import { NotFound } from 'http-errors';
import { User } from '../models';
import { hashPassword } from '../utils';

async function getUsers() {
  const users = await User.findAll();
  if (!users) throw new NotFound('no_users_in_base');
  return users;
}

async function createUser({ email, password, name }) {
  password = hashPassword(password);
  return await User.create({ email, password, name });
}

async function getUserById({ id }) {
  const user = await User.findByPk(id);
  // TODO make findOrFail
  if (!user) throw new NotFound('no_user_in_base');
  return user;
}

async function updateUser({ params: { id }, body: { email, name } }) {
  const user = await User.findByPk(id);
  if (!user) throw new NotFound('no_user_in_base');

  await user.update({ email, name });

  return user;
}

async function deleteUser({ id }) {
  const user = await User.findByPk(id);
  if (!user) throw new NotFound('no_user_in_base');

  await user.destroy();
}

export {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
