const DB = require('./database');

module.exports = (user_id, transaction_id) => DB
    .getOne({ user_id, transaction_id }).then(console.log);
