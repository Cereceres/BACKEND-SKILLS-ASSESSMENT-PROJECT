const Mongo = require('mongoose');

Mongo.connect('mongodb://localhost/assessment');

module.exports = Mongo;
