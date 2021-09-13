const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controllers/private");
const { verifyToken } = require("../middleware/auth");

router.route("/").get(verifyToken, getPrivateData);

module.exports = router;
