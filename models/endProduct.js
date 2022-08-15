const {model, Schema} = requrire('mongoose')

module.exports = model (
    "End Product", 
    new Schema ({
ID : String,
ExpectedProduct : Number,
ExpectedRemRawMaterial : String,
ReceivedProduct : Number,
ReceivedRawMaterial : Number
    })
)