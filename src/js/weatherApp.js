const tempBox = document.querySelector('.temperature')
const humBox = document.querySelector('.humidity')
const photo = document.querySelector('.photo')

const API_CORD = 'https://api.openweathermap.org/data/2.5/weather?lat='
const API_CORD2 = '&lon='
const API_KEY = '&appid=407ced3d1d71207809d280573934ac8f'
const API_UNITS = '&units=metric'

class WeatherApp {
	constructor(latitude, longitude) {
		this.latitude = latitude
		this.longitude = longitude
	}

	app() {
		const x = this.latitude
		const y = this.longitude
		const URL = API_CORD + x + API_CORD2 + y + API_KEY + API_UNITS

		axios
			.get(URL)
			.then(res => {
				const temp = res.data.main.temp
				const hum = res.data.main.humidity
				const status = Object.assign({}, ...res.data.weather)

				if (status.id >= 200 && status.id < 300) {
					photo.setAttribute('src', '../dist/img/weather-icons/thunderstorm.png')
				} else if (status.id >= 300 && status.id < 400) {
					photo.setAttribute('src', '../dist/img/weather-icons/drizzle.png')
				} else if (status.id >= 500 && status.id < 600) {
					photo.setAttribute('src', '../dist/img/weather-icons/rain.png')
				} else if (status.id >= 600 && status.id < 700) {
					photo.setAttribute('src', '../dist/img/weather-icons/ice.png')
				} else if (status.id >= 700 && status.id < 800) {
					photo.setAttribute('src', '../dist/img/weather-icons/fog.png')
				} else if (status.id === 800) {
					photo.setAttribute('src', '../dist/img/weather-icons/sun.png')
				} else if (status.id >= 801 && status.id < 900) {
					photo.setAttribute('src', '../dist/img/weather-icons/cloud.png')
				} else {
					photo.setAttribute('src', './img/unknown.png')
				}

				tempBox.textContent = Math.floor(temp) + '°C'
				humBox.textContent = hum + '%'
			})
			.catch(() => {
				tempBox.textContent = 'Err'
				humBox.textContent = 'Err'
			})
	}
}

const toca = new WeatherApp('21.3069', '-157.8583')
const bora = new WeatherApp('19.3500', '-81.2000')
const tunga = new WeatherApp('25.0582', '-77.3430')

if(window.location.href.indexOf('toca') > -1) {
	window.addEventListener('DOMContentLoaded', () => toca.app())
} else if(window.location.href.indexOf('bora') > -1) {
	window.addEventListener('DOMContentLoaded', () => bora.app())
} else if(window.location.href.indexOf('tunga') > -1) {
	window.addEventListener('DOMContentLoaded', () => tunga.app())
}