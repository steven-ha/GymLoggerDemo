const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
  name: String,
  type: String,
  workouts: [{'name': String, 'sets': Number, 'reps': Number, 'distance': Number, 'duration': Number}]
});

const Group = mongoose.model('group', GroupSchema, 'groups');

module.exports = Group;

module.exports.createGroup = function(group, callback){
  Group.create(group, callback);
};

module.exports.createWorkout = function(group, update, options, callback){
  Group.findOneAndUpdate(group, update, options, callback);
};

module.exports.getWorkoutsByGroupId = function(group, callback){
  Group.find(group, callback);
};

module.exports.updateWorkout = function(group, update, options, callback){
  Group.findOneAndUpdate(group, update, options, callback);
};

module.exports.removeWorkout = function(group, update, options, callback){
  Group.findOneAndUpdate(group, update, options, callback);
};

module.exports.removeGroup = function(group, callback){
  Group.findOneAndRemove(group, callback);
};
