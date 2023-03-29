const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(400);
  throw new Error("tes euy!");
});

module.exports = router;
