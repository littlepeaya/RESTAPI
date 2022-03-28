const mongoose = require ('mongoose');

const personSchema = new mongoose.Schema({
    id:{
        type : Number,
        unique: true,
        trim: true,
        required: true
    },
    name:{
        type : String,
        trim: true,
        required: true
    },
    born:{
        type : Number,
        trim: true,
        required: true
    },
    nationality:{
        type : String,
        required: true
    },
    branch:{
        type : String,
        required: true
    }
},
{timestamps: true
});

let Person = mongoose.model("Person",personSchema);
module.exports = {Person};
    

