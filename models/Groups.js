/*
 * Using Sequelize lib
 * types doc (https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
 *
 */

const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Groups = sequelize.define(
  "groups",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
    },
    userId: {
      field: "id_user",
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Groups;
