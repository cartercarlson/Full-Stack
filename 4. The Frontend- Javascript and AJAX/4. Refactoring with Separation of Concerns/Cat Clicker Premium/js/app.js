var model = {
	currentCat: null,
	cats: [{
		clickCount : 0,
		name : 'Tabby',
		imgSrc : 'img/cat_picture1.jpg'
	},
	{
		clickCount : 0,
		name : 'Fatty',
		imgSrc : 'img/cat_picture2.jpeg'
	},
	{
		clickCount : 0,
		name : 'Bashful',
		imgSrc : 'img/cat_picture3.jpeg'
	},
	{
		clickCount : 0,
		name : 'Asshole',
		imgSrc : 'img/cat_picture4.jpeg'
	},
	{
		clickCount : 0,
		name : 'Pussy',
		imgSrc : 'img/cat_picture5.jpeg'
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
		adminView.init();
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
		this.catElem = document.getElementByID('cat');
		this.catNameElem = document.getElementByID('cat-name');
		this.catCountElem = document.getElementByID('cat-count');
		this.catImageElem = document.getElementByID('cat-img');

		this.catImageElem.addEventListener('click', function(){
			octopus.incrementCounter();
		});

		this.render();
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
		this.catListElem = document.getElementByID('cat-list');
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


// Admin View

view adminView = {
	init: function(){
		this.adminElem = document.getElementByID('admin');
		this.buttonElem = document.getElementByID('changeDetail');
		this.formElem = document.getElementByID('details');
		this.nameElem = document.getElementByID('nameLabel');
		this.picElem = document.getElementByID('picLabel');
		this.clickElem = document.getElementByID('clickLabel');

		this.render();
	},

	render: function(){
		var currentCat = octopus.getCurrentCat();
		var nameElem = this.nameElem;
		var picElem = this.picElem;
		var clickElem = this.clickElem;

		this.buttonElem.addEventListener('click', (function(currentCat){
			return function(){
				var currentCat = octopus.getCurrentCat();
				document.getElementByID('details').style.display = 'block';
				nameElem.setAttribute('value', currentCat.name);
				picElem.setAttribute('value', currentCat.imgSrc);
				clickElem.setAttribute('value', currentCat.clickCount);
				adminView.render();
			};
		})(currentCat));
	}
};


octopus.init();