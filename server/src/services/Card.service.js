const { Card } = require("../db/models");

class CardService {
  static async getAll() {
    return await Card.findAll();
  }

  static async getById(id) {
    return await Card.findByPk(id);
  }

  static async create(data) {
    return await Card.create(data);
  }
}

module.exports = CardService;
