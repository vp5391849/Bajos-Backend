// const { update } = require("../../models/contractor");
const Contractors = require("../../models/contractor");

let endpoint = {
  name: "",
  method: "patch",
  run: (req, res) => {
    const { id } = req.query;
    const update = req.body;

    Contractors.updateOne({ ID: id }, update, { new: true }, (err, data) => {
      if (err) return err;
      if (!data.length) return res.send(data);

      data.append(update);
      // console.log(data)
      res.send(data);
      data.save();
    });
  },
};
module.exports = endpoint;
