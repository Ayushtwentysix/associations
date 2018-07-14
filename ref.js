var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/comments_initial_2");

var Post = require("./models/post");
var User = require("./models/user");

// //USER SCHEMA//

// //POST SCHEMA//


// User.create({
//     email: "gharmummy@edu",
//     name: "Mom"
// });

// Post.create({
//     title: "how to make great burger 3",
//     content: "yeah,  found it simple, thanks"
// },function(err, post){
//     User.findOne({name: "Mom"},function(err, foundUser){
//         if(err){
//             console.log(err);
//         }
//         else{
//             foundUser.posts.push(post);
//             foundUser.save(function(err,data){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

///////////////        find posts             ////////

User.findOne({name: "Mom"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }
    else{
        console.log(user);
    }
})