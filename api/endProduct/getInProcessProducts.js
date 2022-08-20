const Manufacture = require('../../models/manufactureProduct')

let endpoint = {
    name : 'getInProcessProductNames',
    method : 'get',
    run : (req,res)=>{
        Manufacture.find((err,data)=>{
            if (err) return err
            if (!data.length) return res.status(404).send()

            let productName = value (data, "RawMaterialName")
            res.send(productName)
        })
    }
}


function value (arr,prop){
    let values = arr.map(item => item[prop])

    return values
}
module.exports = endpoint 
