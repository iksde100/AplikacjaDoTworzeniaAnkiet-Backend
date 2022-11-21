/*
 * Using Sequelize lib
 * types doc (https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
 *
 */

const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Reservations = sequelize.define(
  "reservations",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    dateStart: {
      field: "date_start",
      type: DataTypes.DATE,
    },
    dateFinish: {
      field: "date_finish",
      type: DataTypes.DATE,
    },
    clientName: {
      field: "client_name",
      type: DataTypes.STRING,
    },
    clientSurname: {
      field: "client_surname",
      type: DataTypes.STRING,
    },
    advanceTotal: {
      field: "advance_total",
      type: DataTypes.FLOAT,
    },
    advancePaid: {
      field: "advance_paid",
      type: DataTypes.FLOAT,
    },
    discount: {
      type: DataTypes.FLOAT,
    },
    priceTotal: {
      field: "price_total",
      type: DataTypes.FLOAT,
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
    },
    idUser: {
      field: "id_user",
      type: DataTypes.INTEGER,
    },
    idItem: {
      field: "id_item",
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Reservations;
