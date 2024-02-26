var express = require("express");
var router = express.Router();

/* GET users listing. */

router.use((req, res, next) => {
  console.log("test");
  next();
});

router.get("/", (req, res, next) => {
  res.send("respond with a resource!!");
});

router.get("/cool", function (req, res, next) {
  res.send("You're so cool");
});

module.exports = router;
