const {model, Schema} = require('mongoose')

module.exports = model (
    "End Product", 
    new Schema ({
ID : String,
ExpectedProduct : Number,
ExpectedRemRawMaterial : String,
ReceivedProduct : Number,
ReceivedRawMaterial : Number,
ProcessProducts : String,
Contractor : String,
ProductName : String
    })
)