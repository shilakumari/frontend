var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log(this.id + " " + this.name);
    };
    return Organizer;
}());
var Event2 = /** @class */ (function () {
    function Event2(id, name, description, startTime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.endTime = endtime;
    }
    Event2.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.startTime + " " + this.endTime);
    };
    return Event2;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log(this.id + " " + this.name + " " + this.description + " " + this.address);
    };
    return Venue;
}());
var organizer = new Organizer(1, "Ram");
organizer.display();
var event1 = new Event2(2, "Farewell", "To celebrate loved ones and offer support", "10:30 PM", "3 PM");
event1.display();
var venue = new Venue(3, "The hotels and resorts", "Best for bachelor party and product launch", "Aashiyana Nagar patna");
venue.display();
