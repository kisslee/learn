var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;

// console.log(settings.db);
// console.log(settings.host);
// console.log(Connection.DEFAULT_PORT);

module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, {}));
console.log('db.js');