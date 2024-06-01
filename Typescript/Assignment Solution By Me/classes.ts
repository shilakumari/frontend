class Organizer{
    id:number;
    name:string;

    constructor (id:number, name:string){
        this.id=id;
        this.name=name;
    }
    display(){
        console.log(this.id+" "+this.name);
    }
}

class Event2{
    id:number;
    name:string;
    description:string;
    startTime:string;
    endTime:string;

    constructor (id:number, name:string,description:string,startTime:string, endtime:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.startTime=startTime;
        this.endTime = endtime;
    }
    display(){
        console.log(this.id+" "+this.name+" "+this.description+" "+this.startTime+" "+this.endTime);
    }
}

class Venue{
    id:number;
    name:string;
    description:string;
    address:string;

    constructor(id:number, name:string,description:string,address:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.address=address;
    }
    display(){
        console.log(this.id+" "+this.name+" "+this.description+" "+this.address);
    }
}

var organizer:Organizer = new Organizer(1,"Ram");
organizer.display();

var event1:Event2 = new Event2(2,"Farewell", "To celebrate loved ones and offer support", "10:30 PM","3 PM");
event1.display();

var venue:Venue = new Venue(3, "The hotels and resorts", "Best for bachelor party and product launch","Aashiyana Nagar patna");
venue.display();
