const {model , Schema} = require ('mongoose')

module.exports = model (
    "Product",
    new Schema ({
        
        ID : String,
        Name : String,
        SR : Number,
        SKU : Number,
        RawMaterial : String 

    })
)