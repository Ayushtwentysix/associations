var mongoose = require("mongoose");


var infoSchema = new mongoose.Schema({
    name: String,
    email: String,
    comments: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "comment"
    }]
})

var info = mongoose.model("info", infoSchema);
module.exports = info;