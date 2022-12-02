const body = document.querySelector('body')
const mobileNav = document.querySelector('.nav__mobile-box')
const mobileNavBtn = document.querySelector('.burger-btn')
const mobileAllNavItems = document.querySelectorAll('.nav__mobile-box-item')
const desktopNav = document.querySelector('.nav__desktop-box')
const desktopNavBtn = document.querySelector('.burger-btn-desktop')
const desktopAllNavItems = document.querySelectorAll('.nav__desktop-box-item')
const navIcon = document.querySelector('.nav__icon')
const footerYear = document.querySelector('.footer__year')
const contactUsername = document.querySelector('#name')
const contactUserEmail = document.querySelector('#email')
const contactUserMsg = document.querySelector('#msg')
const contactBtn = document.querySelector('.contact__form-btn')
const contactHeading = document.querySelector('.contact h2')
const tempTocaToca = document.querySelector('.temp')
const humTocaToca = document.querySelector('.hum')
const tempBora = document.querySelector('.temp-nd')
const humBora = document.querySelector('.hum-nd')
const tempTunga = document.querySelector('.temp-rd')
const humTunga = document.querySelector('.hum-rd')
const emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i

const API_CORD = 'https://api.openweathermap.org/data/2.5/weather?lat='
const API_CORD2 = '&lon='
const API_KEY = '&appid=407ced3d1d71207809d280573934ac8f'
const API_UNITS = '&units=metric'

const weatherAppTocaToca = () => {
	const x = '21.3069'
	const y = '-157.8583'
	const URL = API_CORD + x + API_CORD2 + y + API_KEY + API_UNITS

	axios
    .get(URL)
    .then(res => {
		const temp = res.data.main.temp
		const hum = res.data.main.humidity

        tempTocaToca.textContent = Math.floor(temp) + '°C'
        humTocaToca.textContent = hum + '%'
	})
    .catch(() => (warning.textContent = 'Error!'))
}

const weatherAppBora = () => {
	const x = '19.3500'
	const y = '-81.2000'
	const URL = API_CORD + x + API_CORD2 + y + API_KEY + API_UNITS

	axios
    .get(URL)
    .then(res => {
		const temp = res.data.main.temp
		const hum = res.data.main.humidity

        tempBora.textContent = Math.floor(temp) + '°C'
        humBora.textContent = hum + '%'
	})
    .catch(() => (warning.textContent = 'Error!'))
}

const weatherAppTunga = () => {
	const x = '25.0582'
	const y = '-77.3430'
	const URL = API_CORD + x + API_CORD2 + y + API_KEY + API_UNITS

	axios
    .get(URL)
    .then(res => {
		const temp = res.data.main.temp
		const hum = res.data.main.humidity

        tempTunga.textContent = Math.floor(temp) + '°C'
        humTunga.textContent = hum + '%'
	})
    .catch(() => (warning.textContent = 'Error!'))
}

weatherAppTocaToca()
weatherAppBora()
weatherAppTunga()

const mobileBlock = () => {
	if (mobileNav.classList.contains('nav__mobile-box--active')) {
		if (body.classList.contains('scroll-block')) {
			body.classList.remove('scroll-block')
		} else {
			body.classList.add('scroll-block')
		}
	}
}

const handleDesktopNavItemsAnimation = () => {
	let delayTime = 0

	desktopAllNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleDesktopNav = () => {
	desktopNav.classList.toggle('nav__desktop-box--active')

	desktopAllNavItems.forEach(item => {
		item.addEventListener('click', () => {
			desktopNav.classList.remove('nav__desktop-box--active')
		})
	})

	handleDesktopNavItemsAnimation()
}

const handleMobileNavItemsAnimation = () => {
	let delayTime = 0

	mobileAllNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleMobileNav = () => {
	mobileNav.classList.toggle('nav__mobile-box--active')
	body.classList.remove('scroll-block')

	mobileAllNavItems.forEach(item => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav__mobile-box--active')
			body.classList.remove('scroll-block')
		})
	})

	handleMobileNavItemsAnimation()
	mobileBlock()
}

const msgBtnAction = () => {
	if (contactUsername.value !== '' && contactUserMsg.value !== '' && emailCheck.test(contactUserEmail.value)) {
		;(contactHeading.textContent = 'sent!'), (contactUsername.value = '')
		contactUserEmail.value = ''
		contactUserMsg.value = ''
	} else {
		contactHeading.textContent = 'check the form..'
	}

	setTimeout(() => {
		contactHeading.textContent = 'contact us!'
	}, 2500)
}

const deleteMobileAnimation = () => {
	mobileAllNavItems.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

const deleteDesktopAnimation = () => {
	desktopAllNavItems.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

const currentYear = () => {
	const date = new Date().getFullYear()
	footerYear.innerText = date
}

currentYear()

contactBtn.addEventListener('click', e => {
	e.preventDefault()
	msgBtnAction()
})

navIcon.addEventListener('click', () => {
	mobileNav.classList.remove('nav__mobile-box--active')
	desktopNav.classList.remove('nav__desktop-box--active')
})
mobileNavBtn.addEventListener('click', handleMobileNav)
desktopNavBtn.addEventListener('click', handleDesktopNav)
