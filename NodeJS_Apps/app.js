console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const os = require('os');
const notes = require('./notes.js');

fs.appendFile("greetings.txt",'hello');

var user = os.userInfo();
console.log(user);
