import { DataTypes } from 'sequelize';

export async function up(queryInterface) {
  const transaction = await queryInterface.sequelize.transaction();
  try {
    await queryInterface.addColumn('users', 'birthday', {
      type: DataTypes.DATEONLY,
    }, { transaction });
    await queryInterface.addColumn('users', 'position', {
      type: DataTypes.STRING,
    }, { transaction });
    await queryInterface.addColumn('users', 'grade', {
      type: DataTypes.STRING,
    }, { transaction });
    await queryInterface.addColumn('users', 'workProject', {
      type: DataTypes.STRING,
    }, { transaction });
    await queryInterface.addColumn('users', 'hobbies', {
      type: DataTypes.ARRAY(DataTypes.STRING),
    }, { transaction });
    await queryInterface.addColumn('users', 'hardSkills', {
      type: DataTypes.ARRAY(DataTypes.STRING),
    }, { transaction });
    await queryInterface.addColumn('users', 'description', {
      type: DataTypes.STRING,
    }, { transaction });
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
}

export async function down(queryInterface) {
  const transaction = await queryInterface.sequelize.transaction();
  try {
    await queryInterface.removeColumn('users', 'birthday', { transaction });
    await queryInterface.removeColumn('users', 'position', { transaction });
    await queryInterface.removeColumn('users', 'grade', { transaction });
    await queryInterface.removeColumn('users', 'workProject', { transaction });
    await queryInterface.removeColumn('users', 'phone', { transaction });
    await queryInterface.removeColumn('users', 'hardSkills', { transaction });
    await queryInterface.removeColumn('users', 'description', { transaction });
    await queryInterface.removeColumn('users', 'hobbies', { transaction });
  } catch (err) {
    await transaction.rollback();
    throw err;
  }
}
