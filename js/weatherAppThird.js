const tempThirdIsland = document.querySelector('.temperature-rd')
const humThirdIsland = document.querySelector('.humidity-rd')
const weatherThirdIsland = document.querySelector('.weather-rd')

const API_CORD = 'https://api.openweathermap.org/data/2.5/weather?lat='
const API_CORD2 = '&lon='
const API_KEY = '&appid=407ced3d1d71207809d280573934ac8f'
const API_UNITS = '&units=metric'

const weatherAppThirdIsland = () => {
	const x = '25.0582'
	const y = '-77.3430'
	const URL = API_CORD + x + API_CORD2 + y + API_KEY + API_UNITS

	axios
    .get(URL)
    .then(res => {
		const temp = res.data.main.temp
		const hum = res.data.main.humidity
		const status = Object.assign({},...res.data.weather)

        tempThirdIsland.textContent = Math.floor(temp) + '°C'
        humThirdIsland.textContent = hum + '%'
		weatherThirdIsland.textContent = status.main
	})
    .catch()
}

weatherAppThirdIsland()