var $message = $('#message');
var count = 0;
$message.text("");

var elem = document.getElementById('kitten');
elem.addEventListener('click', function(){
	//the element has been clicked... do stuff here

	count++;
	$message.append('<p> This cat has been clicked '+count+' times</p>');

}, false);







/*
var elem = document.getElementById('my-elem');
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
}, false);
*/ 