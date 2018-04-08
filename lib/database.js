const DB = require('./mongo');

const Schema = DB.Schema;
const collection = 'transactions';
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
const coll = DB
    .model(collection, schema, collection);
const database = {
    insert: (data) => coll.create(data),
    getOne: (query) => coll.findOne(query).lean().exec(),
    get: (query) => coll.find(query).lean().exec()

};


module.exports = database;
