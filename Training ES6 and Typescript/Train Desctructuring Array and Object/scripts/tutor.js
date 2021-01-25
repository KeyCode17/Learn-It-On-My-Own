"use strict";
// let employee = ["Daffa", "Karyudi", "Male"];
// let [fname, lname, gender] = employee; //without default
var employee = ["Daffa", "Karyudi"];
var fname = employee[0], lname = employee[1], _a = employee[2], gender = _a === void 0 ? "Male" : _a; //with default
console.log(fname);
console.log(lname);
console.log(gender);
console.log("\n");
console.log("Above using Array");
console.log("Below using Object");
console.log("\n");
var employee = {
    fname: "daffa",
    lname: "karyudi",
    gender: "Male"
};
// let {fname, lname, gender} = employee; //without alias
// console.log(fname);
// console.log(lname);
// console.log(gender);
var f = employee.fname, l = employee.lname, g = employee.gender;
console.log(f);
console.log(l);
console.log(g);
//# sourceMappingURL=tutor.js.map