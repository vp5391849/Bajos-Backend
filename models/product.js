const { model, Schema } = require("mongoose");

module.exports = model(
  "Product",
  new Schema({
    ID: String,
    Name: String,
    SKU: String,
    RawMaterials: Array,
    UsedQuantity: String
  })
);
