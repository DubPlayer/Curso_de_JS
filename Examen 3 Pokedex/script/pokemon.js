




async function verpokemon(){
var url = window.location.search;
const urlParams = new URLSearchParams(url);
var code = urlParams.get('pokemon');
console.log(code);




const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${code}`);
var data = response.data;
console.log(data);


document.getElementById('nombremostrar').innerHTML = data.name;
document.getElementById('idmostrar').innerHTML = data.id;
document.getElementById('stat1').innerHTML = data.weight + ("kg");
document.getElementById('stat2').innerHTML = data.height+ ("m");


var imagefront = document.getElementById('front');
var imageback = document.getElementById('back');

imagefront.src = data.sprites.front_default;
imageback.src = data.sprites.back_default;

lengthmoves = data.moves.length;

console.log(lengthmoves);

for(var i = 0; i<lengthmoves; i++){

    var output = data.moves[i].move.name;
    document.getElementById('move1').innerHTML += + (i+1) + ". "+ output + " <br></br>";
    
}

lengthabilites = data.abilities.length;

console.log(lengthabilites);

for(var i = 0; i<lengthabilites; i++){

    var output2 = data.abilities[i].ability.name;
    document.getElementById('abilities').innerHTML += + (i+1) + ". "+ output2 + " ";
    
}





}



