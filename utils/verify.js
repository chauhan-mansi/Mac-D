const jwt = require("jsonwebtoken");
const token = require("../model/customer/customer.controller");

const JWT_SECRET = "mac'd2823";

function verifyToken(token) {
  try {
    const food = jwt.verify(token, JWT_SECRET);
    return food;
  } catch (error) {
    return { error: "Invalid or expired token" };
  }
}

module.exports = verifyToken;
