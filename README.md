# smart-utils
Collection of util things
  
## Usage  

```
npm install smart-utils
```
  
  
Methods
  
-------
  
- [Tagrize](#tagrize)
- [EnsureDirectoryExists](#ensuredirectoryexists)
- [Now EnsureDirectoryExists with promise](#now-ensuredirectoryexists-with-promise)
- [With promise but Q lib](#with-promise-but-q-lib)
- [With promise multi nivel path](#with-promise-multi-nivel-path)
- [ListDirectoryContentRecursive](#listdirectorycontentrecursive)
- [ListDirectoryContent](#listdirectorycontent)
- [With promise Q lib](#with-promise-q-lib)
- [ObjectDeepFind](#objectdeepfind)
- [ReplaceAll](#replaceall)
  
---  
### Tagrize  

Generate an tag name for HTML tags to angularjs components.
* Where `smartUtils` turns to `smart-utils`  
* Where `SmartUtils` turns to `smart-utils`  
* Where `ISmartUtils` turns to `i-smart-utils`  
* Where `SmartUtilsAndEtc` turns to `smart-utils-and-etc`   
  
```javascript
var smartUtils = require('smart-utils');

var wordOne = "smartUtils";
var wordTwo = "SmartUtils";
var wordThre = "ISmartUtils";
var wordFour = "SmartUtilsAndEtc";

console.log(smartUtils.tagrize(wordOne));
console.log(smartUtils.tagrize(wordTwo));
console.log(smartUtils.tagrize(wordThre));
console.log(smartUtils.tagrize(wordFour));
```  
---  
  
### EnsureDirectoryExists  

Ensure the directory exists

```javascript
var smartUtils = require('smart-utils');

function ensureDirectoryExists_callback(error) {
    if (error) {
        console.log('Houston, We\'ve Had a Problem');
    }
};

smartUtils.ensureDirectoryExists('C:/temp', ensureDirectoryExists_callback);

console.log('All ok.');

```  

#### Now EnsureDirectoryExists with promise 

```javascript
var Promise = require('promise');
var smartUtils = require('smart-utils');

var ensureDirectoryExists = Promise.denodeify(smartUtils.ensureDirectoryExists);

ensureDirectoryExists('C:/temp')
    .then(() => {

        console.log('All right');
    }, (error) => {
        
        console.log('Houston, We\'ve Had a Problem');
    });
```  

#### With promise but Q lib

```javascript
var Q = require('q');
var smartUtils = require('smart-utils');

var ensureDirectoryExists = Q.denodeify(smartUtils.ensureDirectoryExists);

ensureDirectoryExists('C:/temp')
    .then(() => {

        console.log('All right');
    }, (error) => {
        
        console.log('Houston, We\'ve Had a Problem');
    });
```  

#### With promise multi nivel path

```javascript
var path = require('path');
var Promise = require('promise');
var smartUtils = require('smart-utils');

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
```  

---  
  
### ListDirectoryContentRecursive  
  
List directory and file inside an directory recursively  
  
```javascript
var smartUtils = require('smart-utils');

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

```  

### ListDirectoryContent  
  
List directory and files inside an directory with options or no to list recursively  
  
```javascript
var smartUtils = require('smart-utils');

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

```  

#### With promise Q lib

```javascript
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
  
```  
  
---  

### ObjectDeepFind  

Get the value of an property deep into in a object, or not.  
Do not ask me the utility of it ;D   
  
```javascript
var smartUtils = require('smart-utils');

var dataObject = {
    one: {
        two: {
            three: {
                value: "This is the final value!"
            },
            value: "This is not the final value! Go ahead!"
        },
        value: "This is the second level value."
    },
    value: "Yeap, first level value."
};

console.log(smartUtils.objectDeepFind(dataObject, 'value'));
console.log(smartUtils.objectDeepFind(dataObject, 'one.value'));
console.log(smartUtils.objectDeepFind(dataObject, 'one.two.value'));
console.log(smartUtils.objectDeepFind(dataObject, 'one.two.three.value'));

```  
  
---  
### ReplaceAll  
  
Replace all found values at once, without regex ;D.   
  
```javascript
var smartUtils = require('smart-utils');

var text = "object is a color, but object is a fruit to.";

console.log(smartUtils.replaceAll(text, "object", "orange"));
  
```  
  
---    
  
  
### News  
    
- 0.0.1 Created the project, added *tagrize* function.  
- 0.0.2 Added *ensureDirectoryExists* function.
- 0.0.3 Fix callback function of *ensureDirectoryExists* and added release to update npm package.
- 0.0.4 Added *listDirectoryContentRecursive* function.  
- 0.0.5 Added *objectDeepFind* function.  
- 0.0.6 Added *replaceAll* function.  
- 0.0.7 Added *listDirectoryContent* function.  
  
Danke  
  