/*
 * Using Sequelize lib
 * types doc (https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
 *
 */

const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Surveys = sequelize.define(
  "surveys",
  {
    // Klucze
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      field: "id_user",
      type: DataTypes.INTEGER,
    },

    title: {
      type: DataTypes.TEXT,
    },

    // Pytania
    question1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question3: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question4: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question5: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question6: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question7: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question8: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question9: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question10: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question11: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question12: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question13: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question14: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question15: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question16: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question17: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question18: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question19: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    question20: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Wymagane przez Sequelize
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

module.exports = Surveys;
