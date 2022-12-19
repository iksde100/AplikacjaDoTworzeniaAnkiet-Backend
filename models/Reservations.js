/*
 * Using Sequelize lib
 * types doc (https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
 *
 */

const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");
const Items = require("./Items");
const Groups = require("./Groups");

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
      allowNull: true,
    },
    clientSurname: {
      field: "client_surname",
      type: DataTypes.STRING,
      allowNull: true,
    },
    clientPhone: {
      field: "client_phone",
      type: DataTypes.STRING,
      allowNull: true,
    },
    clientEmail: {
      field: "client_email",
      type: DataTypes.STRING,
      allowNull: true,
    },
    isAdvance: {
      field: "is_advance",
      type: DataTypes.BOOLEAN,
    },
    advanceTotal: {
      field: "advance_total",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    advancePaid: {
      field: "advance_paid",
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    isDiscount: {
      field: "is_discount",
      type: DataTypes.BOOLEAN,
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    priceTotal: {
      field: "price_total",
      type: DataTypes.FLOAT,
    },
    paidAmount: {
      field: "paid_amount",
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
    userId: {
      field: "id_user",
      type: DataTypes.INTEGER,
    },
    groupId: {
      field: "id_group",
      type: DataTypes.INTEGER,
    },
    itemId: {
      field: "id_item",
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  },
);

Items.hasMany(Reservations);
Groups.hasMany(Reservations);
Reservations.belongsTo(Items);
Reservations.belongsTo(Groups);

module.exports = Reservations;
