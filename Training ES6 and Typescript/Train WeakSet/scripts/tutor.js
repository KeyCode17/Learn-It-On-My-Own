"use strict";
// let mySet = new Set();
// let key = {};
// mySet.add(key);
// console.log(mySet.size);
// key = null; // even ket set null my.Set.size still 1
// console.log(mySet.size);
// key = [...mySet][0];
// above HardSet
// below WeakSet
var set = new WeakSet();
var key = {};
set.add(key);
console.log(set.has(key));
key = null;
console.log(set.has(key));
//# sourceMappingURL=tutor.js.map