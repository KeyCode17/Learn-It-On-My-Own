"use strict";
// var firstname = "Daffa"
// var lastname = "Karyudi"
var _a;
// let person = {
//     firstname,
//     lastname,
//     fullname: firstname + lastname
// };
// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.fullname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        fullname: fullname,
        firstname: firstname,
        lastname: lastname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var p = createPerson("Ross", "Geller", 62);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
console.log("\n");
console.log("type 1 above");
console.log("type 2 below");
console.log("\n");
var ln = 'last name';
var person = (_a = {
        "first name": "Daffa"
    },
    _a[ln] = "Karyudi",
    _a);
console.log(person["first name"]);
console.log(person[[ln]]);
console.log(person);
//# sourceMappingURL=tutor.js.map