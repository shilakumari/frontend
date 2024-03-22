class Organizer1{
    private _id:number;
    private _name:string;

    get id():number{
        return this._id;
    }
    set id(id:number){
        this._id=id;
    }

    get name():string{
        return this._name;
    }
    set name(name:string){
        this._name = name;
    }
}

class Event3{
    private _id:number;
    private _name:string;
    private _description:string;
    private _startTime:string;
   private _endTime:string;

    get id():number{
        return this._id;
    }
    set id(id:number){
        this._id=id;
    }

    get name():string{
        return this._name;
    }
    set name(name:string){
        this._name = name;
    }

    get description():string{
        return this._description;
    }

    set description(description:string){
        this._description = description;
    }

    get startTime():string{
        return this._startTime;
    }
    set startTime(startTime:string){
        this._startTime = startTime;
    }

    get endTime():string{
        return this._endTime;
    }
    set endTime(endTime:string){
        this._endTime = endTime;
    }
}

class Venue1{
    private _id:number;
    private _name:string;
    private _description:string;
    private _address:string;

    get id():number{
        return this._id;
    }
    set id(id:number){
        this._id=id;
    }

    get name():string{
        return this._name;
    }
    set name(name:string){
        this._name = name;
    }

    get description():string{
        return this._description;
    }
    set description(description:string){
        this._description = description;
    }

    get address():string{
        return this._address;
    }
    set address(address:string){
        this._address = address;
    }
}


var organizer1 = new Organizer1();
organizer1.id = 1;
organizer1.name = "Shila";
console.log(organizer1.id+" "+organizer1.name);

var event3 = new Event3();
event3.id = 3;
event3.name = "Farewell";
event3.description = "To celebrate loved ones and offer support";
event3.startTime = "10:30 PM";
event3.endTime = "3 PM";
console.log(event3.id+" "+event3.name+" "+event3.description+" "+event3.startTime+" "+event3.endTime);

var venue1 = new Venue1();
venue1.id = 3;
venue1.name = "The hotels and resorts";
venue1.description = "Best for bachelor party and product launch";
venue1.address = "Aashiyana Nagar patna";
console.log(venue1.id+" "+venue1.name+" "+venue1.description+" "+venue1.address);
