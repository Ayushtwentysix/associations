var mongoose = require("mongoose");


var postSchema = new mongoose.Schema({
    title:String,
    content: String
});

// var Post =
module.exports =  mongoose.model("Post",postSchema);