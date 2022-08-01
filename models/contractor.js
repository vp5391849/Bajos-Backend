const {model, Schema} = require('mongoose')

module.exports = model (
    "Contractor",
new Schema({
    ID : String,
    Name : String,
    Mobile : Number,
    Email : String,
    CanLogin : Boolean,
    Password : String,
    Note : String
    
})
)