const Mongo = require('mongoose');


module.exports = (urlConnections) => {
    console.log('Mongo.connection.readyState ', Mongo.connection.readyState);
    if (Mongo.connection.readyState) return Mongo;

    Mongo.connect(urlConnections, { useMongoClient: true });
    Mongo.connection.on('connected', () => {
        console.log('Mongo default connection is open to ', urlConnections.replace(/(mongodb:.*@)/g, ''));
    });
    Mongo.connection.on('error', (err) => {
        console.log(`Mongo default connection has occured ${err} error`);
    });

    process.on('SIGINT', () => {
        Mongo.connection.close(() => {
            console.log('Mongo default connection is disconnected due to application termination');
            process.exit(0);
        });
    });

    return Mongo;
};
