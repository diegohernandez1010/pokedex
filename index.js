// const request = require('request');
// // request('https://pokeapi.co/api/v2/pokemon?limit=20', function(error, response, body) {

//   request('https://pokeapi.co/api/v2/pokemon', function(error, response, body) {

//   if (response.statusCode === 200) {
//     const bodyJSON = JSON.parse(body);
//     console.log(bodyJSON);
//   } else {
//     console.log(error);
//   }
// }); 
const request = require('request');
function peticionPokemon(name, type, url){
request.get(`https://pokeapi.co/api/v2/pokemon?${name}${type}${url}`,function(error, response, body){
if (response.statusCode === 200){
  const bodyJSON = JSON.parse(body);
  console.log(bodyJSON);

}

})


}