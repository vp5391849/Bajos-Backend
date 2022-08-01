const {model, Schema} = require('mongoose')

module.exports = model(
    "User", 
    new Schema({
        ID : String,
        Mobile : Number,
        Password : String
    })
)