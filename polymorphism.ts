class Employee1{
    public firstName:string;
    public lastName:string;
    public designation:string; 
    
    public print():void{
        console.log("Employee Details");
    }
}

class Manager extends Employee1{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    
    public print():void{
        super.print();
        console.log(this.firstName+" "+this.lastName+" - "+this.designation);
    }
}

class Developer extends Employee1{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    
    public print():void{
        super.print();
        console.log(this.firstName+" "+this.lastName+" - "+this.designation);
    }
}

class Lead extends Employee1{
    constructor(firstName:string, lastName:string, designation:string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    
    public print():void{
        super.print();
        console.log(this.firstName+" "+this.lastName+" - "+this.designation);
    }
}

let employee:Employee1[] = new Array(new Manager("Shila", "Kumari", "Manager"), new Developer("Vinarya", "Kumari", "Developer"), new Lead("Chiku", "Maurya","Lead") );
for(var emp of employee){
    emp.print();
}