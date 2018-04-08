const DB = require('./database');

module.exports = (user_id) => DB.get({ user_id }).then(console.log);
