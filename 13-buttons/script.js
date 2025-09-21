
const wrapper = document.querySelector('.wrapper')
const btns = wrapper.querySelectorAll('[data-counter]')
const result = document.querySelector('.result')
const btnTextDefault = 'Нажми меня'
const btnTextAcive = 'Нажата'
let i = 0

const btnsCounter = (event) => {

	const eTarget = event.target

	if (!eTarget.hasAttribute('data-counter')) return

	btns.forEach(el => {
		if (el.textContent === btnTextAcive) el.textContent = btnTextDefault
	})

	eTarget.textContent = btnTextAcive

	i++

	result.innerHTML = i

}

wrapper.addEventListener('click', btnsCounter)