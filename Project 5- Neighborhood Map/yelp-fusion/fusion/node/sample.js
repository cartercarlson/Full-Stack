'use strict';

const yelp = require('yelp-fusion');

const clientId = '2VGbrnpR6An-WQ6o55yRdQ';
const clientSecret = 'Y3RWO7eFpu5bJYRarOFvTAm86Qez8qB8LdWPG9dia9oJlIJGqDCtnr6SQEJgqHOM';
const apiKey = 'uAjhS3K6oi5E1_ScJvKeQgHcRYmLxNT-k8TTUOuioTYamMVLcHxfT-N3K4O-AwSZQWzAD2umlWS8Tl2xnoQ9NB13MEsBKoCNO3feNVv_vZK9qkPnVFvH8hV8686WnYx';

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});