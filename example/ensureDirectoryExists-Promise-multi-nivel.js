var path = require('path');
var Promise = require('promise');
var smartUtils = require('../smartUtils.js');

var ensureDirectoryExists = Promise.denodeify(smartUtils.ensureDirectoryExists);

ensureDirectoryExists(path.join('C:', 'temp'))
    .then(() => {
        return ensureDirectoryExists(path.join('C:', 'temp', 'smartUtils'));
    })
    .then(() => {
        return ensureDirectoryExists(path.join('C:', 'temp', 'smartUtils', 'multi'));
    })
    .then(() => {
        return ensureDirectoryExists(path.join('C:', 'temp', 'smartUtils', 'multi', 'nivel'));
    })
    .then(() => {

        console.log('Now the path "C:\\temp\\smartUtils\\multi\\nivel" exists ;D');
        console.log('All right');
    }, (error) => {
        
        console.log('Houston, We\'ve Had a Problem');
    });
