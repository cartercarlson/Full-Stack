var travels = {
	"locations": [{
		"imageUrl": "pictures/newzealand.jpg",
		"imageAlt": "New Zealand Hobbiton",
		"name": "New Zealand",
		"date": "April 2017",
		"location": {"lat": -42.017564, "lng": 173.397440}
	},
	{
		"imageUrl": "pictures/washingtondc.jpg",
		"imageAlt": "Washington D.C.",
		"name": "Washington D.C.",
		"date": "March 2017",
		"location": {"lat": 38.918905, "lng": -77.1546522}
	},
	{
		"imageUrl": "pictures/hongkong.jpg",
		"imageAlt": "Hong Kong",
		"name": "Hong Kong",
		"date": "October 2016",
		"location": {"lat": 22.3580723, "lng": 113.8408149}
	},
	{
		"imageUrl": "pictures/nepal.jpg",
		"imageAlt": "Nepal",
		"name": "Nepal",
		"date": "October 2016",
		"location": {"lat": 27.7090319, "lng": 85.2911132}
	},
	{
		"imageUrl": "pictures/london.jpg",
		"imageAlt": "London",
		"name": "London",
		"date": "June 2016",
		"location": {"lat": 51.5287352, "lng": -0.3818016}
	},
	{
		"imageUrl": "pictures/greece.jpg",
		"imageAlt": "Greece",
		"name": "Greece",
		"date": "October 2015",
		"location": {"lat": 37.9908997, "lng": 23.7033198}
	},
	{
		"imageUrl": "pictures/madagascar.jpg",
		"imageAlt": "Madagascar",
		"name": "Madagascar",
		"date": "December 2013",
		"location": {"lat": -18.8873012, "lng": 47.3724269}
	},
	{
		"imageUrl": "pictures/botswana.jpg",
		"imageAlt": "Botswana",
		"name": "Botswana",
		"date": "July 2013",
		"location": {"lat": -20.0002812, "lng": 23.3838838}
	},
	{
		"imageUrl": "pictures/swaziland.jpg",
		"imageAlt": "Swaziland",
		"name": "Swaziland",
		"date": "March 2013",
		"location": {"lat": -26.5069442, "lng": 31.3441399}
	},
	{
		"imageUrl": "pictures/southafrica.jpg",
		"imageAlt": "South Africa",
		"name": "South Africa",
		"date": "December 2012",
		"location": {"lat": -26.1713505, "lng": 27.9699841}
	},
	{
		"imageUrl": "pictures/mozambique.jpg",
		"imageAlt": "Mozambique",
		"name": "Mozambique",
		"date": "July 2012",
		"location": {"lat": -18.4332025, "lng": 34.6194182}
	},
	{
		"imageUrl": "pictures/lesotho.jpg",
		"imageAlt": "Lesotho",
		"name": "Lesotho",
		"date": "October 2011",
		"location": {"lat": -29.3366481, "lng": 27.4470309}
	},
	{
		"imageUrl": "pictures/atlanta.jpg",
		"imageAlt": "Atlanta",
		"name": "Atlanta",
		"date": "June 2011",
		"location": {"lat": 33.7679192, "lng": -84.5606902}
	},
	{
		"imageUrl": "pictures/vegas.jpg",
		"imageAlt": "Las Vegas",
		"name": "Las Vegas",
		"date": "May 2011",
		"location": {"lat": 36.1251958, "lng": -115.315086}
	},
	{
		"imageUrl": "pictures/india.jpg",
		"imageAlt": "India",
		"name": "India",
		"date": "December 2009",
		"location": {"lat": 20.807064, "lng": 78.606475}
	},
	{
		"imageUrl": "pictures/rome.jpg",
		"imageAlt": "Rome",
		"name": "Rome",
		"date": "June 2008",
		"location": {"lat": 41.8518616, "lng": 11.9545259}
	},
	{
		"imageUrl": "pictures/singapore.jpg",
		"imageAlt": "Singapore",
		"name": "Singapore",
		"date": "June 2007",
		"location": {"lat": 1.3154016, "lng": 103.5668179}
	},
	{
		"imageUrl": "pictures/newyork.jpg",
		"imageAlt": "New York",
		"name": "New York City",
		"date": "March 2007",
		"location": {"lat": 40.7058316, "lng": -74.2581937}
	},
	{
		"imageUrl": "pictures/sf.jpg",
		"imageAlt": "San Francisco",
		"name": "San Francisco",
		"date": "December 2006",
		"location": {"lat": 37.757815, "lng": -122.5076404}
	},
	{
		"imageUrl": "pictures/sandiego.jpg",
		"imageAlt": "San Diego",
		"name": "San Diego",
		"date": "June 2006",
		"location": {"lat": 32.8248175, "lng": -117.3753575}
	},
	{
		"imageUrl": "pictures/spain.jpg",
		"imageAlt": "Spain",
		"name": "Spain",
		"date": "April 2005",
		"location": {"lat": 40.4381311, "lng": -3.8196221}
	}
	],
	"display": function () {
		var highlightsArray = [0,1,2,3,4,5]; //array for highlights, need 3
		var item = 0;
		for (i = 0; i < (highlightsArray.length/3); i++) {
			//add row
			$("#location").append(HTMLrowStart(i));

			//add 3 pics per row
			for (count=0; count < 3; count++) {
				var number = highlightsArray[item];
				console.log (number);
				$(".location-row-" + i).append(HTMLitemStart);

				var formattedImageUrl = HTMLimageUrl.replace("%data%", travels.locations[number].imageUrl);
				var formattedImageAlt = HTMLimageAlt.replace("%data%", travels.locations[number].imageAlt);
				var formattedImageStuff = formattedImageUrl + formattedImageAlt;
				$(".col-md-4:last").append(formattedImageStuff);

				var formattedLocationName = HTMLlocationName.replace("%data%", travels.locations[number].name);
				$(".col-md-4:last").append(formattedLocationName);

				var formattedDate = HTMLlocationDate.replace("%data%", travels.locations[number].date);
				$(".col-md-4:last").append(formattedDate);
				item++;
			}
		}
	}
};

$("#mapDiv").append(googleMap);
travels.display();