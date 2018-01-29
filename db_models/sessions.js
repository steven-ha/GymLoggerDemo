const mongoose = require('mongoose');

const SessionSchema = mongoose.Schema({
  name: String,
  date: {day: Number, month: Number, year: Number},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  groups: [{groupId: {type: mongoose.Schema.Types.ObjectId, ref: 'Group'}}]
});

const Session = mongoose.model('session', SessionSchema, 'sessions');

module.exports = Session;

module.exports.createSession = function(session, callback){
  Session.create(session, callback);
};

module.exports.createGroup = function(session, update, options, callback){
  Session.findOneAndUpdate(session, update, options, callback);
}

module.exports.getGroupsBySessionId = function(session, callback){
  Session.find(session, callback);
}

module.exports.getSessionsByUserId = function(user, callback){
  Session.find(user, callback);
}

module.exports.updateSession = function(session, update, options, callback){
  Session.findOneAndUpdate(session, update, options, callback);
}

module.exports.removeSession = function(session, callback){
  Session.findOneAndRemove(session, callback);
}

module.exports.removeGroup = function(session, update, options, callback){
  Session.findOneAndUpdate(session, update, options, callback);
}
