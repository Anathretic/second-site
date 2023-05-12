const tempSecondIsland = document.querySelector('.temperature-nd')
const humSecondIsland = document.querySelector('.humidity-nd')
const weatherSecondIsland = document.querySelector('.weather-nd')

const API_CORD = 'https://api.openweathermap.org/data/2.5/weather?lat='
const API_CORD2 = '&lon='
const API_KEY = '&appid=407ced3d1d71207809d280573934ac8f'
const API_UNITS = '&units=metric'

const weatherAppSecondIsland = () => {
	const x = '19.3500'
	const y = '-81.2000'
	const URL = API_CORD + x + API_CORD2 + y + API_KEY + API_UNITS

	axios
    .get(URL)
    .then(res => {
		const temp = res.data.main.temp
		const hum = res.data.main.humidity
		const status = Object.assign({},...res.data.weather)

        tempSecondIsland.textContent = Math.floor(temp) + '°C'
        humSecondIsland.textContent = hum + '%'
		weatherSecondIsland.textContent = status.main
	})
    .catch()
}

weatherAppSecondIsland()