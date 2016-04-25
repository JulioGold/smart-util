var smartUtils = {
    tagrize: Tagrize,
    ensureDirectoryExists: EnsureDirectoryExists
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
