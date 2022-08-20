const EndProduct = require('../../models/endProduct')
const Product = require ('../../models/manufactureProduct')

let endpoint = {
    name : 'getEndProducts',
    method : 'get',
    run : (req,res)=>{
        let id = req.query
        EndProduct.findOne({ID : id}, (err,data)=>{
            if (err) return err
            if(!data.length ) return res.status().send()
            res.json(data)
        })
    }
}

module.exports = endpoint