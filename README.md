# smart-utils
Collection of util things
  
## Usage  

```
npm install smart-utils
```
  
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

---

### News  
- 0.0.1 Created the project, added *tagrize* function.  
- 0.0.2 Added *ensureDirectoryExists* function.
- 0.0.3 Fix callback function of *ensureDirectoryExists* and added release to update npm package.
- 0.0.4 Added *listDirectoryContentRecursive* function.  
  
Thanks  
