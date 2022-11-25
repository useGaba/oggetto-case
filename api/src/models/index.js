import { Sequelize } from 'sequelize';
import { dbConfig } from '../config/sequelize';
import User from "./User";


const {
  database, username, password, ...configs
} = dbConfig;
const sequelize = new Sequelize(database, username, password, configs);

User.initialize(sequelize);

export {
  sequelize,
  Sequelize,
  User
};
