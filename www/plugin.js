
var exec = require('cordova/exec');

var PLUGIN_NAME = 'extractDepth';

var extractDepth = {
  echo: function(phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  },
  askForImage: function() {
    exec(cb, null, PLUGIN_NAME, 'askForImage', []);
  },
  getDate: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
  }
};

module.exports = extractDepth;
