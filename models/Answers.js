/*
 * Using Sequelize lib
 * types doc (https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types)
 *
 */

const sequelize = require("../config/sequelize");
const { DataTypes } = require("sequelize");

const Answers = sequelize.define(
  "answers",
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
    surveyId: {
      field: "id_survey",
      type: DataTypes.INTEGER,
    },

    // Pytania
    question1: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question2: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question3: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question4: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question5: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question6: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question7: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question8: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question9: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question10: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question11: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question12: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question13: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question14: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question15: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question16: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question17: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question18: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question19: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    question20: {
      type: DataTypes.INTEGER,
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

module.exports = Answers;
