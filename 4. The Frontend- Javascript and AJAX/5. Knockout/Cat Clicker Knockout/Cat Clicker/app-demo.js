/*
var cats = $(".cat");
var buttons = $("button");

function hideAllCats(){
	for (var i=0; i<cats.length; i++){
		$(cats[i]).hide();
	}
}

function bindButtonToCat(idNumber){
	$("#button"+idNumber).click(function(){
		hideAllCats();
		$("#cat"+idNumber).show();
	})
}

function bindCounterToCat(idNumber){
	var cat = "#cat"+idNumber
	$(cat).click(function(){
		var count = $(cat+" > .counter").text();
		count = parseInt(count) + 1;
		$(cat+" > .counter").text(count);
	})
}

for (var i=1; i<=buttons.length; i++){
	bindButtonToCat(i);
}

for (var i=1; i<=cats.length; i++){
	bindCounterToCat(i);
}

hideAllCats();
$("#cat1").show();
*/

var model = {
	currentCat = null,
	cats: [
	{
		clickCount : 0,
		name : 'Tabby',
		imgSrc : 'cat_picture1.jpeg'
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


var octopus = {

	init: function(){
		// set the current cat to the first one on the list
		model.currentCat = model.cats[0];
		// tell views to stablize
		catListView.init();
		catView.init();
	},

	getCurrentCat: function(){
		return model.currentCat;
	},

	getCats: function(){
		return model.cats;
	},

	// set the currently selected cat to the object passed in
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	// increments the counter for the currently-selected cat
	incrementCounter: function() {
		model.CurrentCat.clickCount++;
		catView.render();
	}
};


var catView = {

	init: function() {
		// store pointers to our DOM elements for easy access later
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		// on click, increment to the current cat's counter
		this.catImageElem.addEventListener('click', function(e){
			octopus.incrementCounter();
		});

		// render the view
		this.render();
	},

	render: function() {
		//update the DOM elements with values from the current cat
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}
};


var catListView = {

	init: function() {
		// store the DOM element for easy access later
		this.catListElem = document.getElementById('cat-list');
		this.render();

	},

	render: function() {
		// get the cats we'll be rendering from the octopus
		var cats = octopus.getCats();

		// empty cat list
		this.catListElem.innerHTML = '';

		// loop over cats
		for(var i = 0; i < cats.length; i++){
			// this is the cat we're looping over
			var cat = cats[i];

			// make a new cat list item and set its text
			var elem = document.createElement('li');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(catCopy){
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			// finally, add the element to the list
			this.catListElem.appendChild(elem);
		};
	}
};





/*
var view = {
	init: function(){
		this.body = $('body');
		var catList = $('catlist');

	},
	render: function(){
		buttonStr = '';
		htmlStr = '';
		htmlStr += '<div id="catlist">';
		octopus.forEach(function(idNumber){
			htmlStr += '<button id="button'+idNumber+'">cat '+idNumber +'</button>';
		});
		html +=	'</div>';
		octopus.forEach(function(idNumber){
			htmlStr += '<div class="cat" id="cat"'+idNumber+'>' + 
					'<span class="counter">'+ ? + '</span> clicks <br>' +
					'<img class="clicker" src="cat_picture'+idNumber+'.jpeg">' +
				'</div>';
		});
		this.body.html(htmlStr)
	}
};