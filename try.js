var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/comments_initial_3");

// var b = new mongoose.Schema({
//     name: String,
    
// });

// var b1 = mongoose.model("b1",b);


// var a = new mongoose.Schema({
//       lives: String,
//       type: String,
//       c:[{
//           type: mongoose.Schema.Types.ObjectId,
//         ref: "b1"
//       }]
// })


// var a1 = mongoose.model("a1",a);


// b1.create({
//     name: "Lion"
// },function(err,d){
//     a1.findOne({lives :"ground"},function(err,found){
//         if(err){
//             console.log("error1"+err);
//         }
//         else
//         {
//             found.c.push(d);
//             found.save(function(err, data){
//                 if(err){
//                     console.log("error2"+err);
//                 }
//                 else
//                 {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });
// b1.create({
//     name: "lion"
// },function(err,d){
//     a.findOne({"lives:ground"},function(err, found){
        
//     })
// })

// a1.create({
//     lives:"ground",
//     type:"non-veg"
// },function(err, a11){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(a11);
//     }
// })

////////////////////////////////////////////////////////////////////////////////
mongoose.connect("mongodb://localhost/comments_basicCode");
var comment = require("./models/comment");
var info = require("./models/info");

// info.create({
//     name: "ayush",
//     email: "gupta.ayush1997@gmail.com",
// },function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else 
//     {
//         console.log(data);
//     }
// })

comment.create({
    content: "you shoud definately try paraglidng...its awesome for all"
},function(err,data){
  if(err){
      console.log(err);
  }  else{
      info.findOne({name:"ayush"},function(err,found){
          if(err){
              console.log(err);
          }
          else{
              found.comments.push(data);
              found.save(function(err,data2){
                  if(err){
                      console.log(err);
                  }
                  else{
                      console.log(data2);
                  }
              })
          }
      })
  }
})