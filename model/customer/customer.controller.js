const user = require("./customer.model");

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

// exports.getCustomer
