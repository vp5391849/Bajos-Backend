const RawMaterial = require('../../models/rawMaterial')


let endpoint = {
    name : '',
    method : 'get',
    run : (req,res)=>{
        RawMaterial.find( (err,data)=>{
if (err) return err;
if (!data.length) return res.status(404).send()

return  res.send(data)

        })

    }
}

module.exports = endpoint;