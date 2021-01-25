"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Person.staticMethod = function (name) {
        console.log("static " + this.name);
    };
    Person.prototype.greetPerson = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var p = new Person("Daffa");
Person.staticMethod();
p.greetPerson();
//# sourceMappingURL=tutor.js.map