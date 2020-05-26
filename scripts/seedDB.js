const mongoose = require("mongoose");
const fs = require("fs");
const express = require("express"); 
const app = express(); 

const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/developerProfiles"
);

const profileSeed = [
 profileInfo = {
    name: "Billy Bob",
    skills: ["react", "javascript", "node"],
    description: "I am a smart person, I think you should work with me and we can make something great.",
    email: "billybob@billybob.com",
    phone: "5126669783",

    postImg: [
      { data: Buffer ,
       contentType: String }
    ]},
  {
    name: "Spongebob Squarepants",
    skills: ["node", "react", "html"],
    description: "I love everything and everyone and I want to make friends and I am an excellent frycook!",
    email: "spongebob.squarepants@krustykrab.com",
    phone: "6666666666",

    postImg: [
      { data: Buffer ,
       contentType: String }
    ]
  },
  {
    name: "Bill Gates",
    skills: ["react", "python", "docker"],
    description: "Trust me I'm really smart...",
    email: "billgates@whatever.com",
    phone: "2067778765",

    postImg: [
      { data: Buffer ,
       contentType: String } 
    ]
  }
];

db.Profile
  .remove({})
  .then(() => db.Profile.collection.insertMany(profileSeed))
  .then(data => {
    //console.log(data);
    let curInd;
    data.ops.forEach((user, index) => {
      if (index == 0) {
        curInd = user._id;
      }

      if (index == 1) {
        console.log("INSIDE INDEX 1 CASE");
        db.Profile.findOneAndUpdate({_id: user._id}, { $push: { collaborators: curInd } }, { new: true })
        .then(data => (console.log(data)))
        .catch(err => (console.log(err)));
      }
      //console.log(user);
    });

    console.log(curInd);
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // Saves image to database

app.post('/api/photo', function(req,res){
  postImg.data = fs.readFileSync(req.files.userPhoto.path),
  postImg.contentType = 'image/jpg';
  save();
 });

