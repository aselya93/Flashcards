const router = require("express").Router();
const CardController = require("../controllers/Card.controller");

router.get("/:id", CardController.getCardsByIdTopic);

module.exports = router;
