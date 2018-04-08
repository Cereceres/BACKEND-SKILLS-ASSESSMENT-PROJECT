const DB = require('./database');

module.exports = (user, json) => {
    DB.insert('users', user, json);
};
