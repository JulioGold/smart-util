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
---

### News  
- 0.0.1 Created the project, added *tagrize* function.  
- 0.0.2 Added *ensureDirectoryExists* function.  
  
Thanks  
