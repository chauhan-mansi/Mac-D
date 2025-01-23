const express = require("express");
const {
  createCustomer,
  customerLogin,
  getCustomer,
} = require("./customer.controller");

const router = express.Router();

router.post("/", createCustomer);
router.get("/", getCustomer);
router.post("/login", customerLogin);

module.exports = router;
