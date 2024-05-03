import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    userid:{
        type:Number
    },
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const Schema=mongoose.model("schema",userschema)

export default Schema;