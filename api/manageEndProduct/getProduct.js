const EndProduct = require('../../models/endProduct')

let endpoint = {
    name : 'getProductNames',
    method : 'get',
    run : (req,res)=>{
        EndProduct.find((err,data)=>{
            if (err) return err
            if(!data.length) return res.status(404).send()
let productName = value (data, "ProductName")
res.send(productName)

        })
    }
}

function value (arr){
    let values = arr.map(item => item)
    return values
}

module.exports = endpoint;