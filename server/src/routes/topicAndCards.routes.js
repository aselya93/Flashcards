

const router = require("express").Router();
const TopicController = require("../controllers/Topic.controller");
const CardController = require("../controllers/Card.controller");



router
.get('/', TopicController.getAllTopics)
// .get('/:id', TopicController.getTopicById)


router.get("/:id", CardController.getCardsByIdTopic);


module.exports = router;