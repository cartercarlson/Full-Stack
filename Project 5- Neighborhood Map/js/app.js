		var initialPoints = [
		{
			title: "Raging Waves Waterpark",
			location: {lat: 41.6967971, lng: -88.4176992},
			iconColor: "1F618D",
			url: "https://api.yelp.com/v3/businesses/raging-waves-waterpark-yorkville"
		},
		{
			title: "Chicago Premium Outlets",
			location: {lat: 41.7829187, lng: -88.3169258},
			iconColor: "1E8449",
			url: "https://api.yelp.com/v3/businesses/chicago-premium-outlets-aurora"
		},
		{
			title: "Chipotle",
			location: {lat: 41.7546809, lng: -88.3089367},
			iconColor: "BA4A00",
			url: "https://api.yelp.com/v3/businesses/chipotle-mexican-grill-aurora-17?osq=chipotle"
		},
		{
			title: "Funway",
			location: {lat: 41.836494, lng: -88.2961499},
			iconColor: "A93226",
			website: "https://api.yelp.com/v3/businesses/funway-ultimate-entertainment-center-batavia"
		},
		{
			title: "Phillips Park Zoo",
			location: {lat: 41.7494086, lng: -88.3504218},
			iconColor: "6C3483",
			url: "https://api.yelp.com/v3/businesses/phillips-park-zoo-aurora"
		}
		];

		var map;
		var markers = [];
		

		function initMap() {
			map = new google.maps.Map(document.getElementById('map'),
				{center: {lat: 41.7689162, lng: -88.3010038 },
				zoom: 12,
				mapTypeControl: false
		});


		//var iconHighlighted = makeMarkerIcon('F2F3F4');
		//var iconDefault = makeMarkerIcon('0091ff');
		var largeInfoWindow = new google.maps.InfoWindow();
		var iconHighlighted = makeMarkerIcon('F2F3F4');


		for (var i = 0; i < initialPoints.length; i++) {
			var position = initialPoints[i].location;
			var title = initialPoints[i].title;
			var iconColor = initialPoints[i].iconColor;
			var iconDefault = makeMarkerIcon('1F818D');



// https://discussions.udacity.com/t/yelp-v3-implementation/235928/18
/// Yelp oauth
      var cors_anywhere_url = 'https://cors-anywhere.herokuapp.com/';
      var yelp_auth_url = cors_anywhere_url + "https://api.yelp.com/oauth2/token";
      $.ajax({
          url: yelp_auth_url,
          method: "POST",
          data: {
              grant_type: 'client_credentials',
              client_id: '2VGbrnpR6An-WQ6o55yRdQ',
              client_secret: 'Y3RWO7eFpu5bJYRarOFvTAm86Qez8qB8LdWPG9dia9oJlIJGqDCtnr6SQEJgqHOM'
          },
      }).done(function(response){
          console.log(response); // the response has the access_token
          // initialPoints[i].url = response.url;
          // initialPoints[i].image_url = response.image_url;
          // initialPoints[i].rating = response.rating;


      }).fail(function(error){
          console.log("An error occured in getting Yelp access token!");
      });






			// create a marker per location and put it in an array
			var marker = new google.maps.Marker({
				map: map,
				position: position,
				title: title,
				icon: iconDefault,
				id: i,
				animation: google.maps.Animation.DROP
			});


			// push the marker to our marker array
			markers.push(marker);
			// open large infowindow at each marker
			marker.addListener('click', function () {
				populateInfoWindow(this, largeInfoWindow);
			});



			marker.addListener('mouseover', function() {
				this.setIcon(iconHighlighted);
			});
			marker.addListener('mouseout', function() {
				this.setIcon(iconDefault);
			});
		}
		}

		// Create/populate infowindow for each marker
		function populateInfoWindow(marker, infowindow) {
			// Is infowindow already open?
			if (infowindow.marker != marker) {
				infowindow.setContent('');
				infowindow.marker = marker;
				// Clear marker if infowindow is closed
				infowindow.addListener('closeclick', function () {
					infowindow.marker = null;
				});

				infowindow.setContent('<div>' + marker.title + '</div>' + 
					'<div>Add infowindow API</div>');

				infowindow.open(map, marker);
			}
		}



		// Loop through the markers array and display them all
	  function showLocations() {
	    var bounds = new google.maps.LatLngBounds();
	    // Extend the boundaries of the map for each marker and display the marker
	    for (var i = 0; i < markers.length; i++) {
	      markers[i].setMap(map);
	      bounds.extend(markers[i].position);
	    }
	    map.fitBounds(bounds);
	  }

	  // Loop through the listings and hide them all.
	  function hideLocations() {
	    for (var i = 0; i < markers.length; i++) {
	      markers[i].setMap(null);
	    }
	  }

	  function hideSidebar() {
	  	document.getElementById('map').style.left = "0%";
	  	document.getElementById('show-sidebar').style.display = "inline-block";
	  	document.getElementById('hide-sidebar').style.display = "none";
	  }

	  function showSidebar() {
	  	if($('#map').css("left","25%")) {
	  		$('#map').css("left","0%")
	  	} else if ($('#map').css("left","0%")) {
	  		$('#map').css("left","25%")
	  	};
	  	//if(document.getElementById('map').style.left = "0%") {
			//	document.getElementById('map').style.left = "25%";
			//} else {
			//	document.getElementById('map').style.left = "0%";
			//};
		}



		document.getElementById('show-locations').addEventListener('click', showLocations);
		document.getElementById('hide-locations').addEventListener('click', hideLocations);



		document.getElementById('show-sidebar').addEventListener('click', showSidebar);

		document.getElementById('hide-sidebar').addEventListener('click', hideSidebar);

	  // This function takes in a color and creates a marker icon of the color
	  function makeMarkerIcon(markerColor) {
	  var markerImage = new google.maps.MarkerImage(
	    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
	    '|40|_|%E2%80%A2',
	    new google.maps.Size(21, 34),
	    new google.maps.Point(0, 0),
	    new google.maps.Point(10, 34),
	    new google.maps.Size(21,34));
	  return markerImage;
		}




























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