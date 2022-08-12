const Product = require("../../models/product");
const rawMaterial = require("../../models/rawMaterial");

let endpoint = {
  name: "",
  method: "get",
  run: (req, res) => {
    rawMaterial.find((err, data) => {
      if (err) return err;
      if (!data.length) return res.status(404).send();

      const result = value(data, "Name");
      return res.send(result);
    });
  },
};

function value(arr, prop) {
  // extract value from property
  let values = arr.map((item) => item[prop]);

  return values;
}

module.exports = endpoint;
