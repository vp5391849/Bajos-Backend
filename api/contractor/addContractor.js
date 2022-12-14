// const contractor = require('../../models/contractor')
const { createIndexes } = require('../../models/contractor')
const Contractor = require('../../models/contractor')

let endpoint = {
    name : 'addContractor',
    method : 'post',
    run : (req,res)=>{

    let {
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

let value = ()=>{

    if(password === String){
   canLogin = true;
    }
    else if(password != String ) {
   canLogin = false;
    }

    }
let contractor = new Contractor ({
        ID : createId(),
        Name : name,
        Email : email,
        Mobile : mobile,
        Password : value(),
        Note : note,
        CanLogin : canLogin 
     
    })
    contractor.save()
    
    res.send([createId(),name,mobile,email,password, canLogin])
}
}

const createId = (len = 16, chars = 'abcdefghijklmnopqrstuvwxyz123456789') => {
    let id = '';
    while(len--){
        id += chars[Math.random() * chars.length | 0];
    }
    return id;
}

module.exports=endpoint;