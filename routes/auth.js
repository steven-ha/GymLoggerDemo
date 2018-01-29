const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleAuth = require('google-auth-library');
const queryString = require('query-string');
const User = require('../db_models/users');

router.get('/', (req, res) => {
  res.json('Auth Home');
});

/*
  Description: Endpoint to retrieve user from db
  Note: The user is created by passport using the accessToken included in the request
*/


router.post('/google/getUserByUserId', passport.authenticate('google-token'), (req, res)=>{
  let user = {'userId': req.body.userId};

  User.getUserByUserId( user, (err, results)=>{
    if(!err){
      res.json(results);
    } else {
      res.json('error occured finding user')
    }
  });
});

module.exports = router;
