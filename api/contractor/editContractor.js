const Contractors = require("../../models/contractor");

let endpoint = {
  name: "",
  method: "put",
  run: (req, res) => {
    let { id } = req.query;
    let update = req.body;

    Contractors.findOne({ ID: id }, (err, data) => {
      if (err) return err;
      if (!data) res.send(data);
      for (key in update) {
        data[key] = update[key]
      }
      console.log(data);
      data.save();
      res.send("data updated successfully");
    });
  },
};

module.exports = endpoint;
