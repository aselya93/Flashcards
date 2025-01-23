const TopicController = require("../controllers/Topic.controller");

const router = require("express").Router();

router
.get('/', TopicController.getAllTopics)
.get('./:id', TopicController.getTopicById)


module.exports = router;