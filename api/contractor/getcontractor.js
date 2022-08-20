const Contractors = require('./../../models/contractor')


let endpoint = {
    name : 'contractorById',
    method : 'get',
    run : (req,res)=>{
        const { id } = req.query 
        if (!id) {
            res.status(404).json({
                message : "   required fields"
            })
            return
        }
        Contractors.findOne({ID : id}, (err,data)=>{
            if (err || !data ){
                res.status(404).send()
            }
            res.send(data)
        })
    
    }
}

module.exports = endpoint