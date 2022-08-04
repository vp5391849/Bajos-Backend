const  {model , Schema} = require('mongoose')

module.exports = model(
    "Raw Material",
    new Schema ({
        SR : Number,
        RMKU : Number,
        Name : String,
        MeasureUnit : String

    })
)