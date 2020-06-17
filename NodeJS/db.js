const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DB", (err) => {
   if (!err)
   {
       console.log("Connection to DB successful.")
   }
   else
   {
    console.log("Connection to DB failed.")
   }
});

module.exports = mongoose;