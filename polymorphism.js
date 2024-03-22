var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee1 = /** @class */ (function () {
    function Employee1() {
    }
    Employee1.prototype.print = function () {
        console.log("Employee Details");
    };
    return Employee1;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Manager.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.firstName + " " + this.lastName + " - " + this.designation);
    };
    return Manager;
}(Employee1));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Developer.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.firstName + " " + this.lastName + " - " + this.designation);
    };
    return Developer;
}(Employee1));
var Lead = /** @class */ (function (_super) {
    __extends(Lead, _super);
    function Lead(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Lead.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log(this.firstName + " " + this.lastName + " - " + this.designation);
    };
    return Lead;
}(Employee1));
var employee = new Array(new Manager("Shila", "Kumari", "Manager"), new Developer("Vinarya", "Kumari", "Developer"), new Lead("Chiku", "Maurya", "Lead"));
for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
    var emp = employee_1[_i];
    emp.print();
}
