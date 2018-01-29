const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const Session = require('../db_models/sessions');
const Group = require('../db_models/groups');
const queryString = require('query-string');

router.get('/', function(req, res, next){
  res.json('Session Home');
});

/*
  Description: Endpoint used to create a workout
 */
router.post('/createWorkout', passport.authenticate('google-token'), (req, res) =>{
  let newWorkout = null;

  //determine the type of workout to create
  if(req.body.type == 'cardio'){
    newWorkout = {
      'name': req.body.name,
      'distance': req.body.distance,
      'duration': req.body.duration
    };
  } else {
    newWorkout = {
      'name': req.body.name,
      'sets': req.body.sets,
      'reps': req.body.reps,
    };
  }

  // find the group that will contain the created workout
  Group.createWorkout({'_id': req.body.groupId}, {'$push': {'workouts': newWorkout}}, {new: true}, (err, results) => {
    if(err){
      res.json('unable to add workout to group');
    } else {
      // return the newly created workout
      let arrLength = results.workouts.length;
      res.json(results.workouts[arrLength-1]);
    }
  });
});


/*
  Description: Endpoint used to create a new group and adds a reference of the group to a session
*/
router.post('/createGroup', passport.authenticate('google-token'), (req, res) => {
  // create a new group
  let newGroup = new Group({'name': req.body.name, 'type': req.body.type, 'workout': []});

  // save the group to the database
  newGroup.save((err) => {
    if(err){
      return res.json('unable to create group');
    }
  });

  // add a ref of the new group to a defined sesion
  Session.createGroup({'_id':req.body.id}, {'$push': {'groups': {'groupId': newGroup}}}, {new: true}, (err, results) => {
    if(err){
      res.json('unable to add group to session');
    } else {
      // return the new group
      res.json(newGroup);
    }
  });

});

/*
  Description: Endpoint used to create a session
*/
router.post('/createSession', passport.authenticate('google-token'), (req, res) => {
  // define a session object
  let newSession = {'name': req.body.name, 'date': req.body.date, 'userId': req.body._id, 'groups': []};

  // create the session
  Session.createSession( newSession, (err, results) =>{
    if(!err){
      res.json(results);
    } else {
      res.json('unable to create session');
    }
  });

});

/*
  Description: Endpoint used to retrieve sessions based on the user and date range
*/
router.get('/getSessionsByUserId', passport.authenticate('google-token'), (req, res) => {
  // retrieve the parameters from the request
  let params = queryString.parse(req._parsedUrl.query);

  // define the session object that will be retrieved from the db
  let userSession = {'userId': params.id, 'date.month': params.month, 'date.year': params.year};

  // retrieve the session from the db
  Session.getSessionsByUserId( userSession, (err, results) => {
    if(!err){
      res.json(results);
    } else {
      res.json('unable to retrieve sessions');
    }
  });
});

/*
  Description: Endpoint used to retrieve the groups ref in a session by the sessionId
*/
router.get('/getGroupsBySessionId', passport.authenticate('google-token'), (req, res) => {
  // get the parameters from the request
  let params = queryString.parse(req._parsedUrl.query);

  // retrieve the session from the db
  Session.getGroupsBySessionId({'_id': params.id}, (err, results) => {
    if(!err){
      // return the groups if the session contains group ids
      if(results[0].groups ){
        // array to contain the groupIds ref in the session
        let groupIdArr = [];
        for(let i = 0; i < results[0].groups.length; i++){
          // add the groupId to the arr
          groupIdArr.push(results[0].groups[i].groupId);
        }

        // retrieve the groups using the ids in the group array
        Group.getWorkoutsByGroupId({'_id': {$in: groupIdArr}}, (err, groupResults) => {
          if(!err){
            // return the groups
            res.json(groupResults);
          } else {
            res.json('unable to retrieve workouts from groups');
          }
        });
      } else {
        // return empty array, session did not contain group refs
        res.json([]);
      }

    } else {
      res.json('unable to retrievw workouts by session id');
    }
  });
});

/*
  Description: Endpoint used to update the session
*/
router.post('/updateSession', passport.authenticate('google-token'), (req, res) => {
  let refSession = {'_id':req.body.id};
  let update = {'name': req.body.updatedName};
  Session.updateSession( refSession, update, {new: true}, (err, results) => {
    if(err){
      res.json('unable to update session');
    } else {
      res.json(results);
    }
  });
})

/*
  Description: Endpoint used to update a workout
*/
router.post('/updateWorkout', passport.authenticate('google-token'), (req, res) => {
  let refWorkout = {'workouts._id': req.body.id};

  // updating the workout contained in an array
  let update = { '$set':
    {'workouts.$.name': req.body.updatedName,
    'workouts.$.sets': req.body.updatedSets,
    'workouts.$.reps': req.body.updatedReps}
  };

  Group.updateWorkout( refWorkout, update, {new: true}, (err, results) => {
    if(err){
      res.json('unable to update session');
    } else {
      res.json(results);
    }
  })
});

/*
  Description: Endpoint used to remove a session from the db
*/
router.delete('/removeSession', passport.authenticate('google-token'), (req, res) => {
  // retrieve the parameters from the request
  let params = queryString.parse(req._parsedUrl.query);

  let refSession = {'_id': params.id};

  Session.removeSession( refSession, (err,results)=>{
    if(err){
      res.json('unable to remove session');
    } else {
      res.json('session removed');
    }
  })
})

/*
  Description: Endpoint used to remove a workout from a group
*/
router.post('/removeWorkout', (req, res) => {
  let refGroup = {'workouts._id': req.body.id};

  // remove the workout from the group's workout array
  let update = { '$pull':
    {'workouts': {'_id': req.body.id }}
  };

  Group.removeWorkout(refGroup, update, { new: true }, (err,results)=>{
    if(err){
      res.json('unable to remove workout');
    } else {
      res.json('session workout');
    }
  })
});

/*
  Description: Endpoint used to remove a group from the db
*/
router.post('/removeGroup', (req, res) => {
  //Ref of the group needs to be removed from the session first, then remove group from db.

  let refSession = {'_id': req.body.sessionId};

  let update = { '$pull':
    {'groups': {'groupId': req.body.groupId}}
  };

  Session.removeGroup(refSession, update, {new: true}, (err, results) => {
    if(err){
      res.json('unable to remove group from session');
    } else {
      // successful in removing group ref in session, now remove groups

      let refGroup = {'_id': req.body.groupId};

      Group.removeGroup(refGroup, (groupErr, groupResult) => {
        if(!groupErr){
          res.json('successfully removed group');
        } else {
          res.json('unable to remove group from db');
        }
      });
    }
  });
})

module.exports = router;
