'use strict';

var path = require('path');
var favicon = require('serve-favicon');

module.exports = function(app) {
  app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
};
