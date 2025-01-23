const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const customerRoutes = require("./model/customer/customer.routes");
const itemRoutes = require("./model/items/items.routes");

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/customer", customerRoutes);
app.use("/items", itemRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server Running on port:${port}`);
});
