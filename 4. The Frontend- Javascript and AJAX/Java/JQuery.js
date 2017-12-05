// api.jquery.com/
// Tagging 

$('tag')
$('.class')
$('#id')

// Moving aroudn the tree
$('').parent() // only goes up a single level
$('').parents() // many parents
$('').children() // finds children
$('').find() // many children
$('').siblings() // everything with the same parent
.find('*') // find all

// Remove the featured class from the li tag-
$('li.featured').toggleClass('featured');
// OR
$('.featured').toggleClass('featured');

// Add it back
$('li.featured').toggleClass('featured');

// Remove the class 'featured from article 2 and add it to article 3
var article2 = $('.featured');
var article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');

// add an href to the first nav-list class
var navList = $('.nav-list');
var firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href','#1');

// Change the image source
 $function(){
 	$('img').attr('src', 'http://placekitten.com/350/150');
 })

// Change font size on all article-items to 20px
var articleItems = $('.article-item').find('*');
articleItems.css("font-size","20px");

// Make live changes to the <h1> input box
var val = $('input').val();
$('h1').text(val);

// Remove the unordered list from article 1
var articleItems = $('.article-item');
var ul = articleItems.find('ul');
ul.remove();

// Add children to an element
var firstParent = $('#family1');
var SecondParent = $('<div id="family2"><h1>Family 2</h1></div>');
var bruce = $('<div id="bruce"><h2>Bruce</h2></div>')
var madison = $('<div id="madison"><h3>Madison</h3></div>')
var hunter = $('<div id="hunter"><h3>Hunter</h3></div>')
secondParent.insertAfter(firstParent);
secondParent.append(bruce);
bruce.append(madison);
bruce.append(hunter);

// Iterate with each
function numberAdder(){
	var text, number;
	text = $(this).text();
	number = text.length;
	$(this).text(text + " " + number);
};
$('p').each(numberAdder);

// pass a function into the jQuery object
$(function(){

});





// Events
$('#my-input').on('keypress', function(){
	console.log(' The event happened');
	$('body').css('background-color', '#FFFFFF');
});

/*
1. listen to the #my-button element
2. listen for a `click` event
3. perform the following actions when the button is clicked:
    a. remove the #my-button element from the DOM
    b. add the `success` class to the body
*/
$('#my-button').click(function(){
	$(this).remove();
	$('body').toggleClass('success');
});

$('article').on('click', function(evt){
    $(evt.target).css('background', 'red');
});

// Set jQuery to listen on just one element and see if the target is a list
$( '#rooms' ).on( 'click', 'li', function() {
    ...
});


// clear the screen for testing
document.body.innerHTML = '';
var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {
    // This is the number we're on...
    var num = nums[i];
    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;
    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));
    document.body.appendChild(elem);
};