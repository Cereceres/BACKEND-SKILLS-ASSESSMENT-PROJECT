const DB = require('./mongo');
const schema = require('./schema-transaction');

const collection = 'transactions';

const coll = DB
    .model(collection, schema, collection);


module.exports = {
    insert: (data) => coll.create(data),
    getOne: (query) => coll.findOne(query).lean().exec(),
    get: (query) => coll.find(query).lean().exec()

};


