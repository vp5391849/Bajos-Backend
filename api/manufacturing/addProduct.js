const Manufacture = require("../../models/manufactureProduct");

let endpoint = {
  name: "addManufactureProduct",
  method: "post",
  run: (req, res) => {
    const { name, rmku, quantity, labourCost, price } = req.body;
    if (!name || !rmku || !quantity || !price) {
      res.status(400).json({
        message: "required fields",
      });
    }
    let manufactureProduct = new Manufacture({
      ID: createID(),
      RawMaterialName: name,
      RMKU: rmku,
      Quantity: quantity,
      Price: price,
      LabourCostPerPcs: labourCost,
    });
    manufactureProduct.save();
    res.send([createID(), name, rmku, quantity, price, labourCost]);
  },
};


function createID(len = 16, chars = "abcdefghijklmnopqrstuvwxyz123456789") {
  let id = "";
  while (len--) {
    id += chars[(Math.random() * chars.length) | 0];
  }
  return id;
}

module.exports = endpoint;
