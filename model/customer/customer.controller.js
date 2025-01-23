const user = require("./customer.model");
const jwt = require("jsonwebtoken");

exports.createCustomer = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;
    const existingCustomer = await user.findOne({ name });
    if (existingCustomer) {
      return res.status(401).json("Customer Already Exist");
    }
    const customerData = new user({
      name,
      email,
      password,
      address,
      role,
    });
    await customerData.save();
    res.status(201).json({ success: true, message: "Category Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.customerLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const existingCustomer = await user.findOne({ email, role });
    if (!existingCustomer) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
    if (password !== existingCustomer.password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
    const JWT_SECRET = "mac'd2823";
    const token = jwt.sign({ email, password, role }, JWT_SECRET);
    await res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
