//DESARROLLA AQUI TUS SOLUCIONES


//Utilizando la api de Pokemon https://pokeapi.co/ y usando sólo async/await:
//1.- Declara una función getRandomPokemon que retorne un pokemon aleatorio.
async function getRandomPokemon() {
    let random = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    let pokemon = await response.json()
    console.log(pokemon);
    return pokemon
}
//.2- Declara una funcion getImageAndName que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}


}
//3.- Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:
//<section>
//    <img src="url de imagen" alt="nombre del pokemon">
//    <h1>Nombre del pokemon</h1>
//</section>
async function printImageAndName() {
    let random = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${random}`)
    let pokemon = await response.json()
    let url = pokemon.sprites.front_default
    let nombre = pokemon.pokemon.name

    let template = `<section>
                        <img src= "${url}" alt="${nombre}">
                        <h1>${nombre}</h1>
                    </section>`

    document.body.innerHTML += template
return template
}

printImageAndName()
//Recordatorio, la API de perritos era 'https://dog.ceo/dog-api/'
//4.- Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio
async function getRandomDogImage() {
    let response = await fetch(`https://dog.ceo/api/breeds/image/random`)
    let perrete = await response.json()
    let img = perrete.message
    return img
}
//5.- Declara una función getRandomPokemonImage que retorne la url de la imagen de un pokemon aleatorio.
async function getRandomPokemonImage() {
    let random = Math.floor(Math.random() * 151)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${random}`)
    let pokemon = await response.json()
    let img = pokemon.sprites.front_default
    return img
}
//6.- Declara una función printPugVsPikachu que pinte la batalla entre "Pug" y "Pikachu" (no se testea)
async function printPugVsPikachu(){
let response = await fetch(`https://dog.ceo/api/breed/pug/images/random`)
    let pug = await response.json()
let responseDos = await fetch(`https://pokeapi.co/api/v2/pokemon-form/25`)
let pokemon = await responseDos.json()
let pikachu = pokemon.sprites.front_default

let batalla = `<section>
                    <img src= "${pug.message}" alt="${pug}">
                    <h1>VS.</h1>
                    <img src= "${pikachu}" alt="${pikachu}">
                </section>`
document.body.innerHTML += batalla

return batalla
}

printPugVsPikachu();
//Usando la api de Rick and Morty https://rickandmortyapi.com/ y sólo async/await:
//7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.
async function getRandomCharacter(){
    let random = Math.floor(Math.random() * 826)
    let response = await fetch(`https://rickandmortyapi.com/api/character/${random}`)
    let element = await response.json()
    return element
}
// 8.- Declara una función getRandomCharacterInfo que retorne de un personaje su imagen, nombre, episodios en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})
async function getRandomCharacterInfo(){
    let random = Math.floor(Math.random() * 826)
    let response = await fetch(`https://rickandmortyapi.com/api/character/${random}`)
    let element = await response.json()
        let img = element.image
        let name = element.name
        let episodes = element.episode
        let firstEpisode = element.episode[0]
    let responseDos = await fetch(`${firstEpisode}`)
    let aparicion = await responseDos.json()
        let dateEpisode = aparicion.air_date

    let personaje =`<section>
                        <img src= "${img}" alt="${img}">
                        <h1>${name}</h1>
                        <h1>${episodes}</h1>
                        <h1>${firstEpisode}</h1>
                        <h1>${dateEpisode}</h1>
                    </section>`

    document.body.innerHTML += personaje


    return {img, name, episodes, firstEpisode, dateEpisode}
}
//9.- Pinta los anteriores datos en el DOM (no se testea) (l.102 - l. 110)

