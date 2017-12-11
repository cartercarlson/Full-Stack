var model = {
	currentCat = null;
	cats: [{
		clickCount : 0,
		name : 'Tabby',
		imgSrc : 'cat_picture1.jpg'
	},
	{
		clickCount : 0,
		name : 'Fatty',
		imgSrc : 'cat_picture2.jpeg'
	},
	{
		clickCount : 0,
		name : 'Bashful',
		imgSrc : 'cat_picture3.jpeg'
	},
	{
		clickCount : 0,
		name : 'Asshole',
		imgSrc : 'cat_picture4.jpeg'
	},
	{
		clickCount : 0,
		name : 'Pussy',
		imgSrc : 'cat_picture5.jpeg'
	}]
};

// function for opening the view when you press the admin button
// function to close the view when you press cancel
// function to update cat with current values when I press save
var octopus = {

	init: function(){
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();
	},

	getCurrentCat: function(){
		return model.currentCat;
	},

	getCats: function(){
		return model.cats;
	},

	setCurrentCat: function(cat){
		model.currentCat = cat;
	},

	incrementCounter: function(){
		model.currentCat.clickCount++;
		catView.render();
	}
};


var catView = {
	init: function(){
		this.catElem = document.getElementID('cat');
		this.catNameElem = document.getElementID('cat-name');
		this.catCountElem = document.getElementID('cat-count');
		this.catImageElem = document.getElementID('cat-img');

		this.catImageElem.addEventListener('click', function(){
			octopus.incrementCounter();
		});

		this.render;
	},

	render: function(){
		var currentCat = octopus.getCurrentCat();
		this.catCountElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc; 
	}
};

var catListView = {
	init: function(){
		this.catListElem = document.getElementID('cat-list');
		this.render();
	},

	render: function(){
		var cat, elem, i;
		var cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for (i = 0; i < cats.length; i++) {
			cat = cats[i];
			elem = document.createElement('li');
			elem.textContent = cat.name;
			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};

octopus.init();