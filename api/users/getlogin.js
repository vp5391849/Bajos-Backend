const user = require('../../models/user')


let endpoint = {
    name : "userLogin",
    method : 'get',
    run : (req,res)=>{
        const {mobile, password} = req.query
        if (!mobile || !password){
            res.status(404).json({
                message : 'error'
            }
        
            )
            return;
        }
            user.findOne({Mobile : mobile, Password : password}, (err,data)=>{
                
                if (err){
                    return res.status(404).send()
                }
                if (!data){
                    return res.status(400).send()
                }
                res.send(data)
            }
            )
      
    }
}

module.exports = endpoint;