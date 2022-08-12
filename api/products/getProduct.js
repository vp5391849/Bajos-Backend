const Product = require("../../models/product");
// const rawMaterial = require("../../models/rawMaterial");

let endpoint = {
  name: "",
  method: "get",
  run: (req, res) => {
   
    let id = req.query 
    Product.findOne({ID : id}, (err,data)=>{
        if(err ) return err
        if (!data.length) return res.status(404).send()
        
        res.send(data)
    })

  },
};

module.exports = endpoint;