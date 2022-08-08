const RawMaterial = require("../../models/rawMaterial");

let endpoint = {
  name: "",
  method: "delete",
  run: (req, res) => {
    const { id } = req.query;
    
    RawMaterial.deleteOne({ ID: id }, (err, data) => {
      if (err) return err
      if (!data.length) return res.status(404).send("raw material does not exists");

      data.filter(rawMaterial => rawMaterial.id === id);

      res.send("Raw Material deleted successfully");
    });
  },
};

module.exports = endpoint;
