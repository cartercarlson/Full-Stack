var googleMap = '<div id="map"></div>';

var HTMLrowStart = function(number) {
	return '<div class="row location-row-' + number + '"></div>';
}

var HTMLitemStart = '<div class="col-md-4"></div>';
var HTMLimageUrl = '<img class="img-responsive image-margin" src="%data%"';
var HTMLimageAlt = ' alt="%data%">';
var HTMLlocationName = '<h3 class="main-color">%data%</h3>';
var HTMLlocationDate = '<p class="sub-color italics">%data%</p>';

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 23.0, lng: 15} ,
    });
    
    function locationFinder() {

        // initializes an empty array
        var placesVisited = [];
        var length = travels.locations.length;

        // iterates through locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        for (i = 0; i < length; i++) {
            var place = travels.locations[i].location;
            placesVisited.push(place);
        };
        return placesVisited;
    }

    var locations = locationFinder();

    for (var i = 0; i < locations.length; ++i) {
          var marker = new google.maps.Marker({
            position: locations[i],
            map: map
          });
          createInfoWindow(marker, imageArray()[i], nameArray()[i]);
        }

}

function createInfoWindow(marker, imageLink, name) {
  var content = '<div id="iw_container">' +
      '<div class="iw_title">' + name + '</div>' +
      '<div class="iw_content"><IMG BORDER="0px" ALIGN="Center" IMG HEIGHT="150px" SRC="' + imageLink + '"></div>' +
   '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}

function imageArray() {

        // initializes an empty array
        var placesImages = [];
        var length = travels.locations.length;

        // iterates through locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        for (i = 0; i < length; i++) {
            var image = travels.locations[i].imageUrl;
            placesImages.push(image);
        };
        return placesImages;
    }

function nameArray() {

        // initializes an empty array
        var placesNames = [];
        var length = travels.locations.length;

        // iterates through locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        for (i = 0; i < length; i++) {
            var name = travels.locations[i].name;
            placesNames.push(name);
        };
        return placesNames;
    }

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initMap);