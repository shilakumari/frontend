class TouchScreenLaptop{
    ram:number;
    hd:number;
    processor:string;

    constructor(ram:number,hd:number,processor:string){
        this.ram = ram;
        this.hd=hd;
        this.processor=processor;
    }
    scroll(){
        console.log("Scrolling");
    }
    click(){
        console.log("Clicking");
    }

}

class HPLaptop extends TouchScreenLaptop{
    selfRecovery:boolean;
    constructor(ram:number,hd:number,processor:string,selfRecovery:boolean){
        super(ram, hd, processor);
        this.selfRecovery = selfRecovery;
    }

    scroll(){
        console.log("Scrolling HPLaptop");
    }

    display(){
        console.log(this.ram +" "+this.hd+" "+this.processor+" "+this.selfRecovery);
    }
}

class DellLaptop extends TouchScreenLaptop{
    mobileAccess:boolean;
    constructor(ram:number,hd:number,processor:string,mobileAccess:boolean){
        super(ram, hd, processor);
        this.mobileAccess =mobileAccess;
    }

    scroll(){
        console.log("Scrolling DellLaptop");
    }

    display(){
        console.log(this.ram +" "+this.hd+" "+this.processor+" "+this.mobileAccess);
    }
}


var hPLaptop:HPLaptop = new HPLaptop(8,725, "Intel Core i3", false);
hPLaptop.scroll();
hPLaptop.click();
hPLaptop.display();

var dellLaptop:DellLaptop = new DellLaptop(16, 1000, "intel Core i7", false);
dellLaptop.scroll();
dellLaptop.click();
dellLaptop.display();