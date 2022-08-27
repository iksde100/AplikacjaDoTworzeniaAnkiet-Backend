/*
 * Using Sequelize lib
 * types doc (https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
 *
 */

const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Cars = sequelize.define(
  "cars",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    brand: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    valueOfCar: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Cars;
