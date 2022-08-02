const Contractos = require('../../models/contractor')


let endpoint = {
    name : '',
    method : 'get',
    run : async (req,res)=>{
        const data = await Contractos.find()
        res.json(data)
    }
}

module.exports = endpoint;