"use strict";
var _a;
var s = Symbol("First Symbol");
console.log("typeof s: " + typeof s);
console.log("s.toString(): " + s.toString());
// let s2 = Symbol();
// let s3 = Symbol();       //this or
var s2 = Symbol("here"); //this are same had difference uniqe id
var s3 = Symbol("here");
console.log("s2===s3: " + (s2 === s3)); // false because they had difference uniqe id
var s4 = Symbol.for('RegSymbol');
var s5 = Symbol.for('RegSymbol');
console.log("s4===s5: " + (s4 === s5)); // true
console.log("Symbol.keyFor(s4): " + Symbol.keyFor(s4));
console.log("Symbol.keyFor(s5): " + Symbol.keyFor(s5));
var fname = Symbol("FirstName");
var person = (_a = {},
    _a[fname] = "Daffa",
    _a);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
//# sourceMappingURL=tutor.js.map