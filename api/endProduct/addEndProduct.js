const EndProduct = require("../../models/endProduct");

let endpoint = {
  name: "",
  method: "post",
  run: (req, res) => {
    const {
      expectedProduct,
      expectedRemRawMaterial,
      receivedProduct,
      receivedRawMaterial,
      contractor,
      processProduct, 
      product
    } = req.body;
    if (
      !expectedProduct ||
      !receivedProduct ||
      !expectedRemRawMaterial ||
      !receivedRawMaterial ||
      !contractor
    ) {
      res.status(404).json({
        message: "required fields",
      });
    }

    let endProduct = new EndProduct({
      ID: createID(),
      ExpectedProduct: expectedProduct,
      ExpectedRemRawMaterial: expectedRemRawMaterial,
      ReceivedProduct: receivedProduct,
      ReceivedRawMaterial: receivedRawMaterial,
      Contractor : contractor,
      ProcessProducts : processProduct,
      ProductName : product
    });
    endProduct.save();
    res.send([
      createID(),
      expectedProduct,
      expectedRemRawMaterial,
      receivedProduct,
      receivedRawMaterial,
      contractor,
      processProduct,
      product
    ]);
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
