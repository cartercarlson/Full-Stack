var initialCats = [
	{
		clickCount : 0,
		name: 'Tabby',
		imgSrc: 'cat_picture1.jpg',
		nicknames: ["Ugly", "Mr. Smelly", "BillBob"]
	},
	{
		clickCount : 0,
		name: 'Fatty',
		imgSrc: 'cat_picture2.jpeg',
		nicknames: ["Jiggles"]
	},
	{
		clickCount: 0,
		name: 'Bashful',
		imgSrc: 'cat_picture3.jpeg',
		nicknames: ['lil bitch']
	},
	{
		clickCount: 0,
		name: 'Asshole',
		imgSrc: 'cat_picture4.jpeg',
		nicknames: ['dad']
	},
	{
		clickCount: 0,
		name: 'Pussy',
		imgSrc: 'cat_picture5.jpeg',
		nicknames: ['cat']
	}
];




var Cat = function(data) {
	var self = this;
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.levels = ko.computed(function(){
		if (self.clickCount() < 20) {
			// SELF lets me reference the "this" found in the Cat function.  Since this function
			// is inside the Cat function, using "this" wouldn't have enough scope to be the same
			// as the other "this"'s
			return "infant";
		}
		if (self.clickCount() < 50) {
			return "teen";
		} else {
			return "adult";
		}
	}, this);
}

// Make the cats show up in a list
// make the cats in the list clickable
// function to set new current cat



var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};
};

ko.applyBindings(new ViewModel());