const DB = require('./mongo');


const database = {
    insert: (collection, id, data) => {
        const coll = DB
            .model(collection, new DB.Schema({}, { strict: false }), collection);
        data.id = id;
        return coll.create(data);
    },
    getOne: (collection, query) => {
        const coll = DB
            .model(collection, new DB.Schema({}, { strict: false }), collection);
        return coll.findOne(query).exec();
    }

};


module.exports = database;
