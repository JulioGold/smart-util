var smartUtils = {
    tagrize: Tagrize,
    ensureDirectoryExists: EnsureDirectoryExists,
    listDirectoryContentRecursive: ListDirectoryContentRecursive,
    objectDeepFind: ObjectDeepFind,
    replaceAll: ReplaceAll
};

module.exports = smartUtils;

function Tagrize(word) {

    if (word) {
        var wordTemp = [];

        for (var index = 0; index < word.length; index++) {
            var element = word[index];
            
            // Verifica se o caracter é maiúsculo
            if (/[A-Z]/.test(element)) {
                // Não adiciona - antes do primeiro caracter
                if (index > 0) {
                    wordTemp.push('-');
                }
                wordTemp.push(element.toLowerCase());
            } else {
                wordTemp.push(element);
            }
        }

        return wordTemp.join('');
    }
};

function EnsureDirectoryExists(directoryPath, callback) {
    
    var fs = require("fs");
    
    fs.mkdir(directoryPath, function(err) {
        if (err) {
            /* Se o erro é que a pasta já existe, então ignora */
            if (err.code == 'EEXIST') {
                callback(null);
            } else {
                callback(err); /* Algo de errado não está certo */
            }
        } else {
            callback(null); /* Tudo ok na criação do diretório */
        }
    });
};

// List all files and directories inside a directory recursive, that is asynchronous
function ListDirectoryContentRecursive(directoryPath, callback) {

    var fs = fs || require('fs');
    var path = path || require('path');
    var results = [];

    fs.readdir(directoryPath, function(err, list) {

        if (err) {
            return callback(err);
        }

        var pending = list.length;

        if (!pending) {
            return callback(null, results);
        }

        list.forEach(function(file) {

            file = path.join(directoryPath, file);

            results.push(file);

            fs.stat(file, function(err, stat) {

                if (stat && stat.isDirectory()) {

                    ListDirectoryContentRecursive(file, function(err, res) {

                        results = results.concat(res);
                        
                        if (!--pending) {
                            callback(null, results);
                        }
                    });
                } else {
                    if (!--pending) {
                        callback(null, results);
                    }
                }
            });
        });
    });
};

// Get the value of an property deep into in a object, or not.  
// Do not ask me the utility of it ;D
function ObjectDeepFind(obj, propertyPath) {
	
    // Divide todas as propriedades pelo .
	var paths = propertyPath.split('.');
	
    // Copia o objeto
	var currentObj = obj;

    // Para cada propriedade vou pegar a próxima até encontrar o valor do path inteiro da propriedade
	for (var i = 0; i < paths.length; ++i) {
		if (currentObj[paths[i]] == undefined) {
			return undefined;
		} else {
			currentObj = currentObj[paths[i]];
		}
	}
	
	return currentObj;
};

function ReplaceAll(text, search, replace) {

    var newText = text;

    while (newText.indexOf(search) > -1) {
        newText = newText.replace(search, replace);
    }

    return newText;
};
