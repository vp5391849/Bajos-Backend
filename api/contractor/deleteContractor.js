// const contractor = require("./../../models/contractor");
const contractor = require("./../../models/contractor");
const Contractors = require("./../../models/contractor");

let endpoint = {
  name: "deleteContractor",
  method: "delete",
  run: (req, res) => {
    const { id } = req.query;
    Contractors.deleteOne({ID : id}, (err, data) => {
        if(err) return err;
        if(!data.length) return res.send(data);
    data.filter(contractor => contractor.id === id)

       
          res.send("contractor deleted")
       
      })
  },
};
module.exports = endpoint;
