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

### News  
0.0.1 Created the project, added tagrize function.  
  
Thanks  
