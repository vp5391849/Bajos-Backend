const Product = require('../../models/product')

let endpoint = {
    name : '',
    method : 'delete',
    run : (req,res)=>{
        const {id} = req.query
        Product.deleteOne({ID : id}, (err,data)=>{
            if(err) return err;
            if(!data.length) return res.status(404).send()

            data.filter(product => product.id === id)
            res.send("product deleted successfully")
        })
    }
}
module.exports = endpoint
