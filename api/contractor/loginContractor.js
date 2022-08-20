const Contractors = require('../../models/contractor')

let endpoint = {
    name : 'contractorLogin',
    method : 'get',
    run : (req,res)=>{

        const {
            mobile,
            password,
        
        } 
        = 
        req.body
        if (!mobile || !password){
            res.status(404).json({
                message : 'error'
            })
        }

        Contractors.findOne({Mobile : mobile, Password : password, CanLogin: true }, (err,data)=>{
            if(err) return res.status(404).send()
            if(!data) return res.status(404).send()
          

            res.send(data)
          
        })
        
    }
}



module.exports = endpoint;
