const Contractors = require('../../models/contractor')


let endpoint = {
    name : 'getContractorName',
    method : 'get',
    run : (req,res)=>{
        Contractors.find((err,data)=>{
       if (err) return err
       if (!data.length ) return res.status(404).send()
       let contractorsName = value (data, "Name")
       return res.send(contractorsName)
        })
    }
    
}
function value (arr, prop){
    let values = arr.map(item => item[prop])
    return values
}
module.exports = endpoint