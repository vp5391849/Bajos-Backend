const { model, Schema } = require("mongoose");

module.exports = model(
  "Raw Material",
  new Schema({
    ID: String,
    RMKU: String,
    Name: String,
    MeasureUnit: String,
  })
);
