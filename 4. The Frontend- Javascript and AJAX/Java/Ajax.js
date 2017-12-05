$.ajax('<url-to-fetch>', '<a-configuration-object>');
// or 
$.ajax('<just a configuration object>');



// make a request
$.ajax({
	url: 'https://www.google.com/'
});

// Pass .done() when the ajax call ^ is done
function handleResponse(data){
	console.log('the ajax request has finished');
	console.log(data);
}

$.ajax({
	url: 'https:www.google.com/'
}).done(handleResponse);

// add authorization header to request
$.ajax({
    url: https://api.unsplash.com/search/photos?page=1&query=${searchedForText}
    headers: {
        Authorization: 'Client-ID 123abc456def'
    }
}).done(addImage);