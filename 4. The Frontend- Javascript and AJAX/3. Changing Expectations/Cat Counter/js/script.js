/*
var $count = $('#count');
var i = 0;
$count.text(i);

//var elem = $('#kitten');
var elem = document.getElementById('kitten');

elem.addEventListener('click', function(){
	//the element has been clicked... do stuff here
	console.log("Cat was clicked!");
	i++;
	$count.text(i);

}, false);



*/

var clickCount = $('#count');
var i = 0;
clickCount.text(i);

$('#kitten').click(function() {
	i++;
	clickCount.text(i);
});


var catOneTag = $('.split');
var catTwo = $('<div class="split"><img src="Cat2.jpg" alt="Cat 2" id="kitten2">');
var newP = $('<p>Click Count: <span id="count2"></span></p></div>');

catTwo.insertAfter($('div'));
catTwo.append(newP);




var clickCount2 = $('#count2');
var b = 0;
clickCount2.text(b);

$('#kitten2').click(function() {
	b++;
	clickCount2.text(b);
});




/*
function checkClick(){
	this.click(function() {
		b++;
		$(this).text(b);
	});
};



var divLocation = $('body');
var nums = [1,2];

for (var i = 1; i < (nums.length  + 1); i++){
	var num = nums[i];

	// move this below appends
	$('#count'+i).text() = num;



	var catAlt = ('Cat'+i);
	var catSrc = catAlt + '.jpg';
	var catTag = ('kitten' + i);
	var catSpan = ('count'+i)
	var placeCat = $('<div class="split"><img src='+catSrc+' alt='+catAlt+' id='+catTag+'>');
	var catCount = $('<p>Click Count: <span id='+catSpan+'></span></p></div>');
	var b = 0;

	$('a').append(placeCat);
	placeCat.append(catCount);

	var clickCount = $('#count'+i);
	clickCount.text(b);

// $('#kitten'+i).checkClick();
};