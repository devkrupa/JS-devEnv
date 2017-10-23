//this file is not transpiled hence use common js and  ES5

//Register babel to transpile before out tests run .
require('babel-register')();

//Disable webpack features that Mocha does not understand .
require.extensions['.css'] = function(){};

