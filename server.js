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

app.get('*', function(req, res) {
  res.sendfile(path.join(__dirname, 'dist/index.html'));
});
app.set('port', port);


app.use(morgan('dev'));

const server = http.createServer(app);
server.listen(port, () => console.log(`The magic happens on port ${port}`))

console.log(`The magic happens at http://localhost:${port}`)

// Mongoose
const Schema = mongoose.Schema;
mongoose.model('User', new Schema({
  name: String,
  password: String,
  admin: Boolean
}));



