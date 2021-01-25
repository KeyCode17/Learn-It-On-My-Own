"use strict";
var mySet = Object.create(null);
mySet.id = 0; // 1 = true & 0 = false
if (mySet.id) {
    console.log("id exists");
}
var myMap = Object.create(null);
// myMap.name = "Daffa";
// let val = myMap.name;
// console.log(val);
myMap[100] = "Hello";
console.log(myMap["100"]);
var ob1 = {};
var ob2 = {};
var ob3 = {};
myMap[ob1] = "World";
myMap[ob2] = "Karyudi"; // exchange myMap[ob1&2&3]
console.log(myMap[ob1]); // console output Karyudi
console.log(myMap[ob2]); // console output Karyudi
myMap[ob1] = "Awesome"; // exchange myMap[ob1&2&3]
console.log(myMap[ob3]); // console output Awesome
console.log(ob1.toString());
console.log(ob2.toString());
console.log(ob3.toString());
//# sourceMappingURL=tutor.js.map