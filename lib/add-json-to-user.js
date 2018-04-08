const DB = require('./database');

module.exports = (user, json) => {
    json.user_id = user;
    return DB.insert(json)
        .then((_res) => {
            const res = _res.toObject();
            res.transaction_id = res._id;
            delete res._id;
            _res.transaction_id = _res._id;
            return _res.save();
        });
};
