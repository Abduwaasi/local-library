const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/profile", (req, res) => {
  res
    .status(200)
    .json({ success: true, data: "Welcome to user profile endpoint" });
});

module.exports = router;
