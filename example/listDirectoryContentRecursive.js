var smartUtils = require('../smartUtils.js');

function listDirectoryContentRecursive_callback(error, result) {
    
    if(error){
        console.log('Ooops, problems!');
        console.log(error);
        return;
    }

    for (var index = 0; index < result.length; index++) {
        var element = result[index];
        console.log(element);
    }
};

smartUtils.listDirectoryContentRecursive('C:/temp/', listDirectoryContentRecursive_callback);
