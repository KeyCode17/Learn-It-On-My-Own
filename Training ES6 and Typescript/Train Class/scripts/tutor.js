"use strict";
// let a = new Person(`wrong tes`) // only can be used after class
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (name) {
        console.log("welcome " + name);
    };
    return Person;
}());
var p = new Person();
p.greet("Daffa");
//# sourceMappingURL=tutor.js.map