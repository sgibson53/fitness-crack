const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/fitness_crack'
const port = process.env.PORT || '3000';

// JWT stuff
const PORT = '1337';
const SECRET = '42isTheAnswer';

mongoose.connect(mongoDB);
app.set('superSecret', SECRET);

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

// app.get('/setup', function(req, res) {
//   let seth = new User({
//     name: 'Seth Gibson',
//     password: 'password',
//     admin: true
//   });
//   console.log("GET request for /setup")

//   seth.save(function(err) {
//     if (err) throw err;

//     console.log('Seth saved successfully');
//     res.json({success: true});
//   })
// })

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.set('port', port);


app.use(morgan('dev'));

const server = http.createServer(app);
server.listen(port, () => console.log(`The magic happens on port ${port}`))

console.log(`The magic happens at http://localhost:${port}`)

// Mongoose
const Schema = mongoose.Schema;
const User = mongoose.model('User', new Schema({
  name: String,
  password: String,
  admin: Boolean
}));



// Routing
app.post('/authenticate', function(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        });
      } else {
        // Create token with only our given payload
        const payload = {
          admin: user.admin
        }

        let token = jwt.sign(payload, app.get('superSecret'), {
          expiresIn: "1d" // 24 hours
        });
  
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }

      
    }

  });
})



