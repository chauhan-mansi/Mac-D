const items = require("./items.model");

exports.createItem = async (req, res) => {
  try {
    const { name, type, price, category } = req.body;
    const existingItem = await items.findOne({ name, type });
    if (existingItem) {
      return res.status(401).json("Item Already Exist");
    }
    const itemData = new items({
      name,
      type,
      price,
      category,
    });
    await itemData.save();
    res.status(201).json({ success: true, message: "Item Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


  
// exports.getCustomer
