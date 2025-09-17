const request = new XMLHttpRequest()
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
request.send()

request.addEventListener('load', function () {
    const { abilities } = JSON.parse(this.responseText)
    const abilityUrl = abilities[0].ability.url
	console.log(abilities)
	console.log(abilityUrl)

    const abilityRequest = new XMLHttpRequest()
    abilityRequest.open('GET', abilityUrl)
    abilityRequest.send()

    abilityRequest.addEventListener('load', function () {
        const abilityData = JSON.parse(this.responseText)
        const description = abilityData.effect_entries[1].effect
        console.log(abilityData)
        console.log(description)
    })
})