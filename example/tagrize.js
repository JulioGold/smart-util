var smartUtils = require('../smartUtils.js');

var wordOne = "smartUtils";
var wordTwo = "SmartUtils";
var wordThre = "ISmartUtils";
var wordFour = "SmartUtilsAndEtc";

console.log(smartUtils.tagrize(wordOne));
console.log(smartUtils.tagrize(wordTwo));
console.log(smartUtils.tagrize(wordThre));
console.log(smartUtils.tagrize(wordFour));
