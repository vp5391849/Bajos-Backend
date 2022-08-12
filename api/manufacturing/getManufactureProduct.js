const Manufacture = require('../../models/manufactureProduct')


let endpoint = {
    name : '',
    method : 'get',
    run : (req,res)=>{
        Manufacture.find((err,data))
        if (err) return err
        if (!data.length) return res.status(404).send()
        res.send(data)
        
    }
    
}
module.exports = endpoint
