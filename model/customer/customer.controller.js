const user = require("./customer.model");

exports.createCustomer = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    const existingCustomer = await user.findOne({ name });
    if (existingCustomer) {
      return res.status(401).json("Customer Already Exist");
    }
    const customerData = new user({
      name,
      email,
      password,
      address,
    });
    customerData.save();
    res.staus(201).json("Customer Profile Added Successfully!");
  } catch (error) {
    res.status(401).json("Internal Server Error");
  }
};
