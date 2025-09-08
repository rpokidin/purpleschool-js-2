
const countDownDate = new Date(2025, 11, 31).getTime()

const timer = setInterval(function() {

    const now = new Date().getTime()
    const distance = countDownDate - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const months = Math.floor(days / 31)
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    const timerBl = document.querySelector('.timer')

    timerBl.innerHTML = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`

    if (distance < 0) {
        clearInterval(timer)
    }

}, 1000)
