const url = new URL('https://rickandmortyapi.com/api/character')

const form = document.getElementById('searchUser')
const query = document.getElementById('query')
const characterImg = document.getElementById('character-img') 
const characterName = document.getElementById('character-name')
const characterType = document.getElementById('character-type')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const name = query.value.trim()
    if(!name) return

    url.searchParams.set('name', name)
     
    try {
        const response = await fetch(url)
        
        if(!response.ok){
            throw new Error(`Request failed : ${response.status}`)
        }
        
        const data = await response.json()
        const character = data.results[0]   
        
        characterImg.src = character.image
        characterName.textContent = character.name
        characterType.textContent = character.species
        query.placeholder = character.name

    } catch (error) {
        window.alert(`[ ERROR -> ${error.message} ]`)
    } finally {
        query.value = ''
        query.focus()
    }  
})