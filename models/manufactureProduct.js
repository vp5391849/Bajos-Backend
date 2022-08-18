const{model, Schema} = require('mongoose')

module.exports = model (
    "Manufacture Product",
    new Schema({
       ID : String,
       RMKU : String,
       RawMaterialName : String,
       Quantity : String,
       Price : Number,
       LabourCostPerPcs : String
    })
)