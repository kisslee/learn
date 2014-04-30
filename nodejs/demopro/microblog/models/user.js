var mongodb = require('./db');

function User(user){
  this.email = user.email;
  this.password = user.password;
};

module.exports = User;

User.prototype.save = function save(callback) {
  //保存mongodb文档
  var user = {
    email: this.email,
    password: this.password
  };

  mongodb.open(function(err, db) {
    if(err){
      return callback(err);
    }

    db.collection('users', function(err, collection) {
      if(err){
        mongodb.close();
        return callback(err);
      }

      collection.ensureIndex('email', {unique: true});
      collection.insert(user, {safe: true}, function(err, user) {
        mongodb.close();
        callback(err, user);
      });
    });
  });
};

User.get = function get(email, callback) {
  mongodb.open(function(err, db) {
    if(err){
      return callback(err);
    }
    db.collection('users', function(err, collection) {
      if(err){
        mongodb.close();
        return callback(err);
      }
      collection.findOne({email: email}, function(err, doc) {
        mongodb.close();
        if(doc){
          var user = new User(doc);
          callback(err, user);
        }else {
          callback(err, null);
        }
      });
    });
  });
};