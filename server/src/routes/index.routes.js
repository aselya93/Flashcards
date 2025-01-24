const router = require("express").Router();

const topicRoutes = require("./topicAndCards.routes");
const formatResponse = require("../utils/formatResponse");

router.use("/topics", topicRoutes).use("/cards", topicRoutes);

router.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = router;
