const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Score = Schema({
    timecomplete:{type: Date},
    score:{type: Number},
    userwork:{type:String},
    course:{type:String},
    amoutquest:{type:Number}
});

module.exports = mongoose.model('Score',Score);