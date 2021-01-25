"use strict";
var str = "Hello";
var arr = [1, 2, 3];
var num = 5;
var obj = { name: "Daffa" };
console.log("For string: " + typeof str[Symbol.iterator]); // can be used in for of loop
console.log("For array: " + typeof arr[Symbol.iterator]); // can be used in for of loop
console.log("For number: " + typeof num[Symbol.iterator]); // can't be used in for of loop
console.log("For object: " + typeof obj[Symbol.iterator]); // can't be used in for of loop
//# sourceMappingURL=tutor.js.map