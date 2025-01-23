const router = require("express").Router();
const cardRoutes = require("./card.routes");
const topicRoutes = require("./topic.routes");
const formatResponse = require("../utils/formatResponse");

router.use("/cards", cardRoutes).use("/topics", topicRoutes);

router.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = router;
