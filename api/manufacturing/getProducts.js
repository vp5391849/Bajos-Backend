const Product = require('../../models/product')


let endpoint = {
    name : '',
    method : 'get',
    run : (req,res)=>{
    Product.find((err,data)=>{
        if(err) return err
        if(!data.length) return res.status(404).send()
        let productNames = value(data, "Name")
        return res.send(productNames)
    })

    
    }
}

function value(arr, prop) {
    // extract value from property
    let values = arr.map((item) => item[prop]);
  
    return values;
  }

module.exports = endpoint 