const mongoose = require("mongoose");

let Employee = mongoose.model("Employee", {
    id: {type: Number},
    name: {type: String},
    performance: {type: Number}
});

module.exports = {Employee};