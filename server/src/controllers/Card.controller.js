const isValidId = require("../utils/isValidId");
const formatResponse = require("../utils/formatResponse");
const { Card } = require("../db/models");

class CardController {

  static async getCardsByIdTopic(req, res) {
    try {
      const { id } = req.params;
      if (!isValidId(id)) {
        return res.status(400).json(formatResponse(400, "Invalid Topic ID"));
      }
      const cards = await Card.findAll({ where: { topicId: id } });
      if (!cards.length) {
        return res
          .status(404)
          .json(formatResponse(404, `Question with id ${id} not found`));
      }
      
      res.status(200).json(formatResponse(200, "success", cards));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = CardController;
