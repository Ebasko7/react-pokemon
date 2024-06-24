
import './App.css'
import axios from 'axios'

function App() {
  const generateButton = document.getElementById('getimages')
  const container = document.getElementById('pokecontainer')
  const randomizer = () => Math.floor(Math.random() * 152)
  let pokeType = ''
  const pokeList = [
    "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
    "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
    "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata",
    "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu",
    "sandshrew", "sandslash", "nidoran♀", "nidorina", "nidoqueen", "nidoran♂",
    "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales",
    "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume",
    "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth",
    "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine",
    "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop",
    "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool",
    "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke",
    "slowbro", "magnemite", "magneton", "farfetch’d", "doduo", "dodrio", "seel",
    "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar",
    "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode",
    "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan",
    "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela",
    "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie",
    "mr. mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros",
    "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon",
    "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl",
    "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite",
    "mewtwo", "mew"
]

  const generate = async () =>{
    let index = randomizer()
    let pokemon = pokeList[index]
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try{
      console.log(`getting ${pokemon}`)
      const response = await axios.get(url)
      const imageURL = response.data.sprites.front_shiny
      const image = document.createElement('img')
      image.src = imageURL
      container.appendChild(image)
      console.log(response.data)
      pokeType = response.data.types[0].type.name
      console.log(pokeType)
    } catch(error){
      console.log('error', error)
    }
  }

  const teamGenerate = async () => {
    while (container.firstChild){
      container.removeChild(container.lastChild)
    }

    let count = 6
    while (count >= 1){
      await generate()
      count--
    }
  }

generateButton.addEventListener('click', teamGenerate)

  return (
    <>
     <div id='titlecontainer'>
      <h1>POKEMON TEAM</h1>
      <button id='getimages' type ='submit'>GENERATE</button>
      </div>
     <div id='pokecontainer'></div>
    </>
  )
}

export default App
