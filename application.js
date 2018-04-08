const addJsonToUser = require('./lib/add-json-to-user');

const [ ,, user, isAdd, json ] = process.argv;

if (isAdd === 'add') addJsonToUser(user, json);
