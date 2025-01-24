const router = require("express").Router();
const cors = require("cors");
const topicRoutes = require("./topicAndCards.routes");
const formatResponse = require("../utils/formatResponse");

router.use("/topics", topicRoutes).use("/cards", topicRoutes);

router.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

router.use(cors({
  origin: "http://localhost:5173", // Разрешить запросы с этого домена
  credentials: true, // Разрешить передачу кук и заголовков авторизации
}));

module.exports = router;
