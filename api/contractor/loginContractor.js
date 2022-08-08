const Contractors = require('../../models/contractor')

let endpoint = {
    name : '',
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
            // if(Contractors.findOne({CanLogin : true}))
        })
        if (canLogin = true){
         
        }
    }
}



module.exports = endpoint;
