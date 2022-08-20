const RawMaterial = require("../../models/rawMaterial");
// const { createID } = require("../../createId");

let endpoint = {
  name: "addRawMaterial",
  method: "post",
  run: (req, res) => {
    const { name, rmku, measureUnit } = req.body;
    if ((!rmku, !name)) {
      res.status(400).json({
        message: "required fields",
      });
    }

    let rawMaterial = new RawMaterial({
      ID: createID(),
      RMKU: rmku,
      Name: name,
      MeasureUnit: measureUnit,
    });
   rawMaterial.save()
    res.send([createID(), rmku, name, measureUnit]);
  },
};

function createID (len = 16, chars = 'abcdefghijklmnopqrstuvwxyz123456789'){
    let id = '';
    while(len--){
        id += chars[Math.random() * chars.length | 0];
    }
    return id;
}

module.exports = endpoint;
