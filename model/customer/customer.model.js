const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name:{type:String, required:true },
    email:{type:String, required:true},
    password:{type:String, required:true},
   address:{type:String, required:false},
   role:{type:String,
    enum:["User","Admin"],
    required: true
   }
});

const user = mongoose.model('Customer',customerSchema);
module.exports= user;
