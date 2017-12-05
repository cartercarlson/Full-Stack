// Change to dot moves, so the function is a property of amy and ben
var carlike = function(obj, loc){
	obj.loc = loc;
	obj.move = move;
	return obj;
};

var move = function(car){
	this.loc++;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();  // in THIS, THIS = ben



// Move function into carlike
var carlike = function(obj, loc) {
    var move = function(){
        this.loc++;
    };
    obj.loc = loc;
    obj.move = move;
    return obj;
};



/// Remove THIS
var carlike = function(obj, loc) {
	obj.loc = loc;
    obj.move = function(){
        obj.loc++;
    };
    obj.loc = loc;
    obj.move = move;
    return obj;
};

// Get MOVE outside function so interpreter only looks at the code one time
var Car = function(loc) {
	var obj = {loc: loc};
    obj.move = move;
    return obj;
};

var move = function(){
	this.loc++;
};



// Add method to the Car class
var Car = function(loc) {
	var obj = {loc: loc};
	extend(obj, Car.methods);
    return obj;
};
Car.methods = {
	move : function(){
		this.loc++;
	}
};

// default object that comes with an object- prototype
var Car = function(loc) {
	var obj = Object.create(Car.prototype);
	obj.loc = loc;
    return obj;
};
Car.prototype.move = function(){
		this.loc++;
};

var Car = function(loc) {
	this.loc = loc;
};
Car.prototype.move = function(){
		this.loc++;
};


var amy = new Car(1);
amy.move();
var ben = new Car(9);
ben.move();