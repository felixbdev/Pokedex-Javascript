const template = document.getElementById('pokeCard').content
const fragment = document.createDocumentFragment()
const cards = document.getElementById('cards')

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData();
})

const fetchData = async() => {
    try {
        for (let index = 1; index < 899; index++) {
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
            const res = await data.json()
            pintarPokemon(res)
            //console.log(res.name)
        }
    } catch (error) {
        console.log(error)
    }
}

const pintarPokemon = data =>{
    //console.log(data)
    //console.log(data.sprites.front_default)
    let pokeImg = data.sprites.front_default
    //console.log(pokeImg)
    const clone = template.cloneNode(true)
    clone.querySelector('h5').textContent = data.name
    clone.querySelector('span').textContent = data.id
    clone.querySelector('img').setAttribute('src', pokeImg)
    cards.appendChild(clone)    
}





