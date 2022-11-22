/*
 * Using Sequelize lib
 * types doc (https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
 *
 */

// https://sebhastian.com/sequelize-join/

const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const Groups = require("./Groups");

const Items = sequelize.define(
  "items",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    pricePerDay: {
      field: "price_per_day",
      type: DataTypes.STRING,
    },
    isActive: {
      field: "is_active",
      type: DataTypes.BOOLEAN,
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
    groupId: {
      field: "id_group",
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

Groups.hasMany(Items);
Items.belongsTo(Groups);

module.exports = Items;
