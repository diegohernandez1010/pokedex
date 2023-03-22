const request = require('request');
request.get('https://pokeapi.co/api/v2/pokemon'), function(error, response, body){

if(response.statusCode === 200){
const bodyJson = JSON.parse(body);
console.log(bodyJson);

}
}
console.log(response.statusCode);
