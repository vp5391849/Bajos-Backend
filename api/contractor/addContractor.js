// const contractor = require('../../models/contractor')
const { createIndexes } = require('../../models/contractor')
const Contractor = require('../../models/contractor')

let endpoint = {
    name : '',
    method : 'post',
    run : (req,res)=>{

    const {
        name,
        email,
        mobile,
        password, 
        note,
        canLogin
    }= req.body

if (!mobile || !email || !name  ){
   res.status(400).json({
    message : "required fields"
   })
}
    let contractor = new Contractor ({
        ID : createId(),
        Name : name,
        Email : email,
        Mobile : mobile,
        Password : password,
        Note : note,
        CanLogin : JSON.parse(canLogin) == true ? "enter password" : "not allowed"
     
    })
    contractor.save()
    
    res.send([createid(),name,mobile,email,password,canLogin])
    }
}

const createId = (len = 16, chars = 'abcdefghijklmnopqrstuvwxyz123456789') => {
    let id = '';
    while(len--){
        id += chars[Math.random() * chars.length | 0];
    }
    return id;
}

module.exports=endpoint