import {characters} from './utils/characters.js'; //array de los personajes

//busca y selecciona el contenedor donde se van a insertar las card
const container = document.querySelector('.containerCards');

//recorre el array de personajes uno a uno y crea las card 
characters.forEach(c => {
    const card = document.createElement('character-card');// crea el componente de las card
    card.data = c; //asigna los datos del personaje en la card
    container.appendChild(card); //agrega la card al contenedor
});

//Escucha el evento personalizado "character-search" que lanza el componente <character-search>
document.querySelector('character-search').addEventListener('character-search', e => {
    const filteredCharacters = e.detail; //Obtiene los personajes filtrados desde el evento
    const container = document.querySelector('.containerCards');//Selecciona el contenedor
    container.innerHTML = ''; //Limpia el contenedor

    //Recorre los personajes filtrados y los vuelve a insertar como card
    filteredCharacters.forEach(c => {
        const card = document.createElement('character-card'); //Crea la card
        card.data = c;
        container.appendChild(card);
    });
});