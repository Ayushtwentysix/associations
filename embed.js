var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/comments_initial");

var postSchema = new mongoose.Schema({
    title:String,
    content: String
});


// //USER SCHEMA//
var userSchema = new mongoose.Schema({
    email:String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User",userSchema);

// //POST SCHEMA//

var Post = mongoose.model("Post",postSchema);


// //CREATE NEW USER//
// var newUser= new User({
//     email: "ayush.gupta2_cs17@gla.ac.in",
//     name: "Ayush Gupta Gla"
// })    
    
//     newUser.posts.push({
//         title: "Summer 2018",
//         content: "I learned a lot of things"
        
//     });
//       newUser.posts.push({
//         title: "Summer 2017",
//         content: "Really depressing"
        
//     });
    
// newUser.save(function(err, user){
//     if(err){
//         console.log("error:"+ err);
//     } 
//     else{
//         console.log(user);      
//     }
    
// });  

// //CREATE NEW POST//
 
// //  var newPost = new Post({
// //      title: "this pic is awesome",
// //      content: "this pic reallly defines you"
// //  });
 
// //  newPost.save(function(err, Post){
// //      if(err){
// //          console.log(err);
// //      }else{
// //          console.log(Post);
// //      }
// //  });

User.findOne({name:"Ayush Gupta Gla"},function(err, User){
   if(err){
       console.log(err);
   } 
   else{
    //   console.log(User);
    User.posts.push({
        title:"winter 2017",
        content: "It is was not that great..rather i learnt new things"
    });
    User.save(function(err, User){
        if(err){
            console.log(err);
        }
        else{
            console.log(User);
        }
    })
   }
});