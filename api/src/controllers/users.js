import { NotFound } from 'http-errors';
import { User } from '../models';
import { hashPassword } from '../utils';

async function getUsers() {
  const users = await User.findAll();
  if (!users) throw new NotFound('no_users_in_base');
  return users;
}

async function createUser({
  email, password, name, birthday, position, grade, workProject, phone,
}) {
  const hashedPassword = hashPassword(password);
  birthday = new Date(birthday);
  const user = await User.create({
    email, password: hashedPassword, name, birthday, position, grade, workProject, phone,
  });
  user.password = undefined;
  return user;
}

async function getUserById({ id }) {
  const user = await User.findByPk(id);
  if (!user) throw new NotFound('no_user_in_base');
  return user;
}

async function updateUser({
  params: { id }, body: {
    email, name, birthday, position, grade, workProject, phone, hobbies, hardSkills, description, telegram,
  },
}) {
  const user = await User.findByPk(id);
  if (!user) throw new NotFound('no_user_in_base');

  await user.update({
    email, name, birthday, position, grade, workProject, phone, hobbies, hardSkills, description, telegram,
  });

  return user;
}

async function deleteUser({ id }) {
  const user = await User.findByPk(id);
  if (!user) throw new NotFound('no_user_in_base');

  await user.destroy();
}

async function updateProgress({ params: { id }, body: { progress } }) {
  const user = await User.findOneOrFail({ id });
  user.progress = progress;
  await user.save();
}

export {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  updateProgress,
};
