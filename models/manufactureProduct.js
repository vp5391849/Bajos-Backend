const{mode, Schema} = require('mongoose')

module.exports = model (
    "Manufacture Product",
    new Schema({
       ID : String,
       RMKU : rmku,
       RawMaterialName : String,
       Quantity : String,
       Price : Number,
       LabourCostPerPcs : String
    })
)