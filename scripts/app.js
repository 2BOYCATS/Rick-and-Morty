const inputName = document.getElementById('input-name')
const characterImg = document.getElementById('character-img') 
const characterName = document.getElementById('character-name')
const characterType = document.getElementById('character-type')
const formInput = document.getElementById('form-input')

formInput.addEventListener('submit', async(e) => {
    e.preventDefault()

    const name = inputName.value.trim()
    if (!name) return

    try {
        const url = `https://rickandmortyapi.com/api/character?name=${name}`
        const response = await fetch(url)
        const data = await response.json()

        if (!data.results){
            throw new Error(`${name} not found`)
        }   

        const character = data.results[0]
        characterImg.src = character.image
        characterName.textContent = character.name
        characterType.textContent = character.species
        inputName.placeholder = character.name
        
    } catch (error) {
        window.alert(`[ERROR] -> ${error.message}`)
    } finally {
        inputName.value = ''
        inputName.focus()
    }
})
