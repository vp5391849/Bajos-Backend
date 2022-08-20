
const { model } = require("mongoose")
const User = require("../../models/user")

let endpoint = {
    name : "createUser",
    method : "post",
    run : (req,res)=>{
        const {

        mobile,
        password
        } = req.body
         
        if(!mobile || !password){
            res.status(401).json({
                message : "required fields"
            })

        }
        let user = new User ({
            ID : createId(),
            Mobile : mobile,
            Password : password
        })
        user.save()
        res.send([createId(), mobile, password])
    }
    
}

    const createId = (len = 16, chars = 'abcdefghijklmnopqrstuvwxyz123456789') => {
        let id = '';
        while(len--){
            id += chars[Math.random() * chars.length | 0];
        }
        return id;
    }
    
    module.exports = endpoint;