const tempFirstIsland = document.querySelector('.temperature')
const humFirstIsland = document.querySelector('.humidity')
const weatherFirstIsland = document.querySelector('.weather')

const API_CORD = 'https://api.openweathermap.org/data/2.5/weather?lat='
const API_CORD2 = '&lon='
const API_KEY = '&appid=407ced3d1d71207809d280573934ac8f'
const API_UNITS = '&units=metric'

const weatherAppFirstIsland = () => {
	const x = '21.3069'
	const y = '-157.8583'
	const URL = API_CORD + x + API_CORD2 + y + API_KEY + API_UNITS

	axios
    .get(URL)
    .then(res => {
		const temp = res.data.main.temp
		const hum = res.data.main.humidity
		const status = Object.assign({},...res.data.weather)

        tempFirstIsland.textContent = Math.floor(temp) + '°C'
        humFirstIsland.textContent = hum + '%'
		weatherFirstIsland.textContent = status.main
	})
    .catch()
}

weatherAppFirstIsland()