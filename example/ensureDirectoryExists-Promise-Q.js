var Q = require('q');
var smartUtils = require('../smartUtils.js');

var ensureDirectoryExists = Q.denodeify(smartUtils.ensureDirectoryExists);

ensureDirectoryExists('C:/temp')
    .then(() => {

        console.log('All right');
    }, (error) => {
        
        console.log('Houston, We\'ve Had a Problem');
    });
