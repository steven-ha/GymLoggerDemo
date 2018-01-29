const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('./routes/sessions');
const auth = require('./routes/auth');
const cors = require('cors');
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
var path = require("path");

// use bodyparser
app.use(bodyParser.json());

//setup connection to database
mongoose.connect('[ENTER_YOUR_MONGO_URI_HERE]');
mongoose.connection.on('connected', () => {
  console.log('Connected to database....');
});
mongoose.connection.on('error', (err) => {
  console.log('Database Error: ' + err);
});

// Create link to Angular build directory
const distDir = __dirname + "/dist/";

console.log(distDir);

app.use(express.static(distDir));

// Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
//app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

// use session endpoints
app.use('/session', session);

// use auth endpoints
app.use('/auth', auth);

// open a socket and listen for a connection
app.listen(port, function(){
  console.log('Listening on port ' + port + '.');
});
