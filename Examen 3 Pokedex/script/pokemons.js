const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(var i = 1; i <= 1017; i++){
fetch (URL + i)
    .then((response) => response.json())
    .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke){
    const div = document.createElement("div");
    div.classList.add("pokemon");

    let tipos = poke.types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');
    console.log(tipos)
   

    div.innerHTML =`
    <p class="pokemon-id-back">${poke.id}</p>
    <div>
    <a href="./indicarpok.html?pokemon=${poke.id}"
    class="btn btn-primary">Ver mas </a>
    </div>
    <div class="pokemon-imagen">
        <img src="${poke.sprites.other["official-artwork"].front_default}"alt="Pikachu"></img>
    </div>
    
    <div class="pokemon-info">
        <div class="nombre-contenedor">
        
            <p class="pokemonid">${poke.id}</p>
            <h2 class="pokemon-nombre">${poke.name}</h2>
        </div>
      
             <div class="pokemon-info">
                ${tipos}
             </div>
             
             <div class="pokemon-stats">
                 <p class="stat">${poke.height}kg</p>
                 <p class="stat">${poke.weight}m</p>
             </div>
         </div>

</div> `;

listaPokemon.append(div);

}
