const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1/fitness_crack";
const port = process.env.PORT || "3000";
const saltRounds = 8;

// JWT stuff
const PORT = "1337";
const SECRET = "42isTheAnswer";

mongoose.connect(mongoDB);
app.set("superSecret", SECRET);

app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.urlencoded({ extended: "true" }));
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

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.set("port", port);

app.use(morgan("dev"));

const server = http.createServer(app);
server.listen(port, () => console.log(`The magic happens on port ${port}`));

console.log(`The magic happens at http://localhost:${port}`);

// Mongoose
const Schema = mongoose.Schema;
const User = mongoose.model(
  "User",
  new Schema({
    username: String,
    password: String,
    displayName: String,
    firstName: String,
    lastName: String,
    admin: Boolean
  })
);

// Routing
app.post("/api/signup", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const displayName = req.body.firstName;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const admin = req.body.admin;

  // Hash password
  bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) throw err;

    let newUser = new User({
      username: username,
      password: hash,
      displayName: displayName,
      firstName: firstName,
      lastName: lastName,
      admin: admin
    });

    newUser.save(function(err) {
      if (err) throw err;

      const tokenPayload = createToken(newUser);
      res.json(tokenPayload);
    });
  });
});

app.post("/api/authenticate", function(req, res) {
  User.findOne(
    {
      username: req.body.email
    },
    function(err, user) {
      if (err) throw err;
      if (!user) {
        res.json({
          success: false,
          message: "Authentication failed. User not found."
        });
      } else if (user) {
        const authRes = res;
        bcrypt.compare(req.body.password, user.password, function(err, res) {
          if (res) {
            const tokenPayload = createToken(user);
            authRes.json(tokenPayload);
          } else {
            authRes.json({
              success: false,
              message: "Authentication failed. Wrong password."
            });
          }
        });
      }
    }
  );
});

function createToken(user) {
  const payload = {
    admin: user.admin
  };

  let token = jwt.sign(payload, app.get("superSecret"), {
    expiresIn: "1d" // 24 hours
  });

  const tokenPayload = {
    success: true,
    token: token
  };

  return tokenPayload;
}
