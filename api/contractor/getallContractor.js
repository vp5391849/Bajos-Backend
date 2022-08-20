const Contractos = require('../../models/contractor')


let endpoint = {
    name : 'getAllContractors',
    method : 'get',
    run :  (req,res)=>{
        const data =  Contractos.find()
        res.json(data)
    }
}

module.exports = endpoint;