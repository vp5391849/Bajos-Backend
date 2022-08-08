const RawMaterial = require("../../models/rawMaterial");

let endpoint = {
  name: "",
  method: "post",
  run: (req, res) => {
    const { name, rmku, measureUnit } = req.body;
    if(!rmku , !name) {
        res.status(400).json({
         message : "required fields"
        })
     }
     

  },
};
