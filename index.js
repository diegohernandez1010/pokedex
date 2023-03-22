const request = require('request');
request('https://pokeapi.co/api/v2/pokemon?limit=20', function(error, response, body) {
  if (response.statusCode === 200) {
    const bodyJSON = JSON.parse(body);
    console.log(bodyJSON);
  } else {
    console.log(error);
  }
}); 