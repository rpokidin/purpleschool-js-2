
const request = new XMLHttpRequest()
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto')
request.send()

request.addEventListener('load', function () {

	const { abilities } = JSON.parse(this.responseText)
	const request = new XMLHttpRequest()

	request.open('GET', `${abilities[0].ability.url}`)
	request.send()
	request.addEventListener('load', function () {

		const { effect_entries } = JSON.parse(this.responseText)
		const { effect } = effect_entries.find(({ language }) => language.name === 'en');
            console.log(effect);
		
	})

})

request.addEventListener('error', function () {
	console.log(new Error('Ошибка при получении данных'))
})