const mongoose = require('mongoose');
//const session = require('./sessions');

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  provider: String,
  userId: String,
  sessions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Session'}]
});

const User = mongoose.model('user', UserSchema, 'users');

module.exports = User;

module.exports.getUserByUserId = function(user, callback){
  User.find(user, callback);
};

module.exports.getUserById = function(user, callback){
  User.find(user, callback);
};

module.exports.getUserByEmail = function(user, callback){
  User.find(user, callback);
};

module.exports.isEmailAvailable = function(email, callback){
  User.find(email, callback);
}

module.exports.createUser = function(user, callback){
  User.create(user, callback);
};

module.exports.createSession = function(user, update, options, callback){
  User.findOneAndUpdate(user, update, options, callback);
};

module.exports.deleteUser = function(user, callback){
  User.deleteOne(user, callback);
}
