const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({

    date:{
        type:Date,
        default:Date.now,
    },
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    busOwnerID:{
        type:Number,
        required:true,
    },
    startTime:{
        type:Date,
        default:Date.now,
    },
    EndTime:{
        type:Date,
        default:Date.now,
    },
    category:{
        type:String,
        required:true,
    },
    SeatBooked:[{
        type:String,
    }],
    bus_no:{
        type:String,
        required:true,
    },
    animeties_list:[{
        type:String,
    }],
    busFare:{
        type:Number,
        required:true,
    },
    busName:{
        type:String,
        required:true,
    },

});

module.exports = PostSchema;
