var smartUtils = require('../smartUtils.js');

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
