const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
<<<<<<< HEAD
=======
const path = require('path');
>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
<<<<<<< HEAD
const path = require('path');
=======

>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

<<<<<<< HEAD
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req,res) =>{
=======
// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
>>>>>>> 75d05f4e83af2c987ba171ff22beaa8440c4eeed
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
