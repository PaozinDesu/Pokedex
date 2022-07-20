const pokemonNome =document.querySelector('.pokemon_nome');
const pokemonNum =document.querySelector('.pokemon_num');
const pokemonImg =document.querySelector('.pokemon_img');

const form =document.querySelector('.forms');
const input =document.querySelector('.input_procura');
const prev =document.querySelector('.btn_prev');
const next =document.querySelector('.btn_next');

let searcPokemon = 1;


const fetchPokemon = async (pokemon) =>{
const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

if(APIResponse.status==200){
    const data = await APIResponse.json();
    return data;
}};


const renderPokemon = async (pokemon) =>{

    pokemonNome.innerHTML='Carregando...';
    pokemonNum.innerHTML ='';
const data = await fetchPokemon(pokemon);
if(data) {
pokemonNome.innerHTML=data.name;
pokemonNum.innerHTML=data.id;
pokemonImg.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
input.value='';
searcPokemon = data.id;
}
else{
    pokemonNome.innerHTML='Não encontrado'; 
    pokemonNum.innerHTML ='';
    pokemonImg.src='';
    input.value='';
}
}


form.addEventListener('submit', (event)=>{
event.preventDefault();
renderPokemon(input.value.toLowerCase());
});



prev.addEventListener('click', ()=>{
if(searcPokemon > 1){
    searcPokemon -= 1;
    renderPokemon(searcPokemon);
}
});
next.addEventListener('click', ()=>{
    searcPokemon += 1;
    renderPokemon(searcPokemon);
});



renderPokemon(searcPokemon);