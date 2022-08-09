const Product = require("../../models/product");
const RawMaterial = require("../../models/rawMaterial");

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
const rawMaterials = RawMaterial.find().exec(function (err,data){
  if(err) return err
  data.map()
})
.then(data => console.log(data))


    let product = new Product({
      ID: createID(),
      SKU: sku,
      Name: name,
      UsedQuantity: usedQuantity,
      RawMaterials: [rawMaterials]
    });
    product.save();
    console.log(product);
    res.send([createID(), sku, name, usedQuantity, [rawMaterials]]);
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
