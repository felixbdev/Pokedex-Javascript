const template = document.getElementById('pokeCard').content
const fragment = document.createDocumentFragment()
const cards = document.getElementById('cards')

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData();
})

const fetchData = async() => {
    try {

        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const res = await data.json()
        pintarPokemones(res.results)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

const pintarPokemones = res =>{
    res.forEach(pokeData)
    cards.appendChild(fragment)
}

function pokeData(item, index){
    const clone = template.cloneNode(true)
        clone.querySelector('img').setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`)
        clone.querySelector('h5').textContent = `${item.name}`
        clone.querySelector('span').textContent = `N° ${index+1}`
        console.log(index)
        fragment.appendChild(clone)
    }




