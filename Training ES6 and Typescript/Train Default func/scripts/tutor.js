"use strict";
// let getValue = function(value){
//     console.log(value)
// }
// getValue(); // without default
var special = 0.1;
var specialFunc = function () { return 20; };
// let getValue = function(value=bonus, bonus=10) // not allowed
var getValue = function (value, bonus, surprise) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * special; }
    if (surprise === void 0) { surprise = bonus + specialFunc(); }
    console.log(value + "and" + bonus + "and" + surprise);
    console.log(arguments.length);
};
// getValue({value insert}, {bonus insert}, {surprise insert})
getValue(); // console output "10 and 1 and 21" [because default was 10 and 1 and 0]
getValue(20); // Console output "20 and 2 and 22" [doesn't need to insert undefined if second,third,ETC to make default]
getValue(30, 45); // Console output "30 and 45 and 65" [surprise used default 45(from bonus) + specialFunc()]
getValue(1, 2, 3); // console output "1 and 2 and 3"
getValue(undefined, 30); // console output "10 and 30 and 50" [insert undefined for first parameter to make default]
getValue(undefined, undefined, 25); // console output "10 and 1 and 25" [because value and bonus insert undefined they using default]
//# sourceMappingURL=tutor.js.map