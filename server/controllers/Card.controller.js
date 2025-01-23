const CardService = require("../src/services/Card.service");
const isValidId = require("../utils/isValidId");
const formatResponse = require("../utils/formatResponse");

class CardController {
  static async getAllCards(req, res) {
    try {
      const cards = await CardService.getAll();
      if()
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = CardController;
