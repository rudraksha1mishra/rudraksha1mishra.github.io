const mongoose =require('mongoose');
const validator =require('validator');

const userSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minLength:3
    },
    Email :{
        type:String,
        required:true,
        Validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid eamil id")
            }
        }
    },
    phone:{
        type:String,
        required:true,
        minLength:10

    },
    query:{
        type:String,
        required:true,
        minLength:3
    }
})



// we need collection
const User=mongoose.model('User',userSchema);
module.exports=User;