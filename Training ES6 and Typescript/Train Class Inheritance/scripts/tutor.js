"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Parent same as default in array/object
var Person = /** @class */ (function () {
    function Person(name) {
        console.log(name + " Person constructor");
    }
    Person.prototype.getID = function () {
        return 10;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) /* Needed because Parent had
                        constructorso super make it stop */ || this;
        console.log(name + " Employee constructor");
        return _this;
    }
    Employee.prototype.getID = function () {
        // return super.getID(); console shown Parent get.ID
        return 50; // console shown 50
    };
    return Employee;
}(Person));
var e = new Employee("Daffa");
console.log(e.getID());
//# sourceMappingURL=tutor.js.map