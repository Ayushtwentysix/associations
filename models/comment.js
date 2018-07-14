var mongoose = require("mongoose");


var commentSchema = new mongoose.Schema({
    content: String
})

var comment = mongoose.model("comment",commentSchema);
module.exports = comment;