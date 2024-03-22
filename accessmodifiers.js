var Organizer1 = /** @class */ (function () {
    function Organizer1() {
    }
    Object.defineProperty(Organizer1.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organizer1.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Organizer1;
}());
var Event3 = /** @class */ (function () {
    function Event3() {
    }
    Object.defineProperty(Event3.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event3.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event3.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event3.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (startTime) {
            this._startTime = startTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event3.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (endTime) {
            this._endTime = endTime;
        },
        enumerable: false,
        configurable: true
    });
    return Event3;
}());
var Venue1 = /** @class */ (function () {
    function Venue1() {
    }
    Object.defineProperty(Venue1.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue1.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue1.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue1.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    return Venue1;
}());
var organizer1 = new Organizer1();
organizer1.id = 1;
organizer1.name = "Shila";
console.log(organizer1.id + " " + organizer1.name);
var event3 = new Event3();
event3.id = 3;
event3.name = "Farewell";
event3.description = "To celebrate loved ones and offer support";
event3.startTime = "10:30 PM";
event3.endTime = "3 PM";
console.log(event3.id + " " + event3.name + " " + event3.description + " " + event3.startTime + " " + event3.endTime);
var venue1 = new Venue1();
venue1.id = 3;
venue1.name = "The hotels and resorts";
venue1.description = "Best for bachelor party and product launch";
venue1.address = "Aashiyana Nagar patna";
console.log(venue1.id + " " + venue1.name + " " + venue1.description + " " + venue1.address);
