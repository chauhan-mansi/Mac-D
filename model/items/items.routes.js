const express = require("express");
const { createItem } = require("./items.controller");
const adminAuthentication = require("../../middleware/adminauthentication");

const router = express.Router();

router.post("/", createItem);

module.exports = router;
