const Product = require("../../models/product");
const RawMaterial = require("../rawMaterials/getAllRawMaterials");

let endpoint = {
  name: "",
  method: "post",
  run: (req, res) => {
    const { sku, usedQuantity, name } = req.body;
    if (!sku || !name) {
      res.json({
        message: "required fields",
      });
    }
 

    let product = new Product({
      ID: createID(),
      SKU: sku,
      Name: name,
      UsedQuantity: usedQuantity,
      RawMaterials: [RawMaterial.run],

    });
    product.save()
    console.log(product)
    res.send([createID(),sku,name,usedQuantity, [RawMaterial.run]])
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
