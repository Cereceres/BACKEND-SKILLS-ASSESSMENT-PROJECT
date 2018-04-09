const DB = require('./mongo');
const Schema = DB.Schema;
const schema = new Schema({
    transaction_id: {
        type:String,
        required:false
    },
    amount: {
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date: {
        type:Date,
        required:true
    },
    user_id: {
        type:String,
        required:true
    },
});

module.exports = schema;
