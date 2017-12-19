

var initialPoints = [
	{
		title: "Raging Waves Waterpark",
		location: {lat: 41.6967971, lng: -88.4176992},
		iconColor: "#1F618D"
	},
	{
		title: "Chicago Premium Outlets",
		location: {lat: 41.7829187, lng: -88.3169258},
		iconColor: "#1E8449" 
	},
	{
		title: "Chipotle",
		location: {lat: 41.7546809, lng: -88.3936599},
		iconColor: "#BA4A00"
	},
	{
		title: "Marmion Academy",
		location: {lat: 41.8153066, lng: -88.2961499},
		iconColor: "#A93226"
	},
	{
		title: "Phillips Park Zoo",
		location: {lat: 41.7494086, lng: -88.3504218},
		iconColor: "#6C3483"
	}
];

var Point = function(data) {

	var self = this;
	this.title = ko.observable(data.title);
	this.iconColor = ko.observable(data.iconColor);
};


var ViewModel = function() {
	var self = this;

	this.pointList = ko.observableArray([]);

	initialPoints.forEach(function(pointItem) {
		self.pointList.push(new Point(pointItem));
	});
/*	this.currentPoint = ko.observable(this.pointList()[0]); */

	this.setPoint = function(clickedPoint) {
		self.currentPoint(clickedPoint);
	};
};

ko.applyBindings(new ViewModel());



