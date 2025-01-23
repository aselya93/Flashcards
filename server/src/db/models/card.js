"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate({ Topic }) {
      this.belongsTo(Topic, {
        foreignKey: "topicId",
      });
    }
  }
  Card.init(
    {
      question: DataTypes.STRING,
      correctAnswer: DataTypes.STRING,
      option1: DataTypes.STRING,
      option2: DataTypes.STRING,
      option3: DataTypes.STRING,
      option4: DataTypes.STRING,
      img: DataTypes.STRING,
      topicId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
