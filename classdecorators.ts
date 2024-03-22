function classDecoratorFactory(price:number) {
    console.log("classDecoratorFactory")
    return (constructor: Function) => {
        console.log('class Decorator')
        console.log(constructor)
        constructor.prototype.price = price
    }  
}

function classDecorator(constructor: Function) {
    console.log('class Decorator')
    console.log(constructor)
    constructor.prototype.price = 10000
}

function propertyDecorator(target:any, propertyName: string){
    console.log("PropertyDecorator");
    console.log(target.construtor);
    console.log(propertyName);
}

function methodDecorator(target:any, methodName: string, descriptor:PropertyDescriptor){
    console.log("methodDecorator");
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
}

function paramDecorator(target:any, methodName: string, paramIndex:number){
    console.log("paramDecorator");
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);
}

@classDecoratorFactory(1234)
class Product{
    @propertyDecorator
    name:string = "IPhone"
    constructor(id: number){

    }
    @methodDecorator
    print(@paramDecorator test:string){
        console.log(this.name);
    }
}

let p = new Product(1)
console.log((<any>p).price)