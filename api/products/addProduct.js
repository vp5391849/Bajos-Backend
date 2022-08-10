const Product = require("../../models/product");
const RawMaterial = require("../../models/rawMaterial");

let endpoint = {
  name: "",
  method: "post",
  run: (req, res) => {
    const { sku, usedQuantity, name, rawMaterial } = req.body;
    if (!sku || !name) {
      res.json({
        message: "required fields",
      });
    }
  //  const rawMaterials = RawMaterial.find( (err,data)=>{
  //     if (err) return err;
  //     if (!data.length) return res.status(404).send()
      
  //     return  res.send(data)
      
  //             })


// function value(arr, prop) {
// if(!arr.length) return res.status(404).send()
//   // extract value from property
//   let values = arr.map(item => item[prop]);

//   return values;
// }

    let product = new Product({
      ID: createID(),
      SKU: sku,
      Name: name,
      UsedQuantity: usedQuantity,
      RawMaterials: rawMaterial
    });
// .then(data => console.log(data))

    // product.save();
    console.log(product);
    res.send([createID(), sku, name, usedQuantity, rawMaterial]);
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
