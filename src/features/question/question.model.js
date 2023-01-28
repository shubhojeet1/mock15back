const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    category:{type:String,required:true},
    type:{type:String,required:true},
    difficulty:{type:String,required:true},
    question:{type:String,required:true},
    correct_answer:{type:String,required:true},
    incorrect_answers:{type:Array,required:true},
    
},{versionKey:false,timestamps:true})

const questionModel = mongoose.model("question",questionSchema)

module.exports =questionModel