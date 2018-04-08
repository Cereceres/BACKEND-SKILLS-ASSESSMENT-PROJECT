const DB = require('./database');

module.exports = (user_id) => DB.get({ user_id })
        .then((res) => res.reduce((init, data) => {
            init.sum = init.sum === undefined ? 0 : init.sum;
            init.sum = init.sum + Number(data.amount);
            return init;
        }, { user_id }))
        .then(console.log);
