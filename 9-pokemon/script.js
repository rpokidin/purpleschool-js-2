
const request = new XMLHttpRequest()
request.open('GET', 'https://pokea2pi.co/api/v2/pokemon/ditto')
request.send()
request.addEventListener('load', function () {

	const { abilities } = JSON.parse(this.responseText)
	const request = new XMLHttpRequest()

	request.open('GET', `${abilities[1].ability.url}`)
	request.send()
	request.addEventListener('load', function () {

		const { effect_entries } = JSON.parse(this.responseText)
		console.log(effect_entries[1].effect)
		
	})

})
request.addEventListener('error', function () {
	console.log(new Error('Ошибка при получении данных'))
})