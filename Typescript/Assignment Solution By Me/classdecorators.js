var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function classDecoratorFactory(price) {
    console.log("classDecoratorFactory");
    return (constructor) => {
        console.log('class Decorator');
        console.log(constructor);
        constructor.prototype.price = price;
    };
}
function classDecorator(constructor) {
    console.log('class Decorator');
    console.log(constructor);
    constructor.prototype.price = 10000;
}
function propertyDecorator(target, propertyName) {
    console.log("PropertyDecorator");
    console.log(target.construtor);
    console.log(propertyName);
}
function methodDecorator(target, methodName, descriptor) {
    console.log("methodDecorator");
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}
function paramDecorator(target, methodName, paramIndex) {
    console.log("paramDecorator");
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}
let Product = class Product {
    constructor(id) {
        this.name = "IPhone";
    }
    print(test) {
        console.log(this.name);
    }
};
__decorate([
    propertyDecorator
], Product.prototype, "name", void 0);
__decorate([
    methodDecorator,
    __param(0, paramDecorator)
], Product.prototype, "print", null);
Product = __decorate([
    classDecoratorFactory(1234)
], Product);
let p = new Product(1);
console.log(p.price);
