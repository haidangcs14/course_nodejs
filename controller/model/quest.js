const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quest = Schema({
    idquest:{type:String},
    content:{type:String},
    answer:{type:Array},
    correct:{type:String},
    course:{type:String}
});

module.exports = mongoose.model('Quest',Quest);