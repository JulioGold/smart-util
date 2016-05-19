var smartUtils = require('../smartUtils.js');

function listDirectoryContent_callback(error, result) {
    
    if(error){
        console.log('Ooops, problems!');
        console.log(error);
        return;
    }

    for (var index = 0; index < result.length; index++) {
        var element = result[index];
        console.log(element);
    }
    
    console.log('----------------------------------------');
};

var options = {
    recursive: true
};

// With options to recursive
smartUtils.listDirectoryContent('C:/temp', options, listDirectoryContent_callback);

// Without options, list just que first directory level  
smartUtils.listDirectoryContent('C:/temp', listDirectoryContent_callback);
