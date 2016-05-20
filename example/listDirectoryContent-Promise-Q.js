var Q = require('q');
var smartUtils = require('../smartUtils.js');

var listDirectoryContent = Q.denodeify(smartUtils.listDirectoryContent);

var options = {
    recursive: true
};

// With options to recursive
listDirectoryContent('C:/temp', options)
    .then(function (result) {

        for (var index = 0; index < result.length; index++) {
            var element = result[index];
            console.log(element);
        }
    
        console.log('----------------------------------------');
        
    }, function (error) {
        
        console.log('Ooops, problems!');
        console.log(error);
    });

// Without options, list just que first directory level  
listDirectoryContent('C:/temp')
    .then(function (result) {

        for (var index = 0; index < result.length; index++) {
            var element = result[index];
            console.log(element);
        }
    
        console.log('----------------------------------------');
        
    }, function (error) {
        
        console.log('Ooops, problems!');
        console.log(error);
    });
