let BODY
let NAV
let NAV_LIST
let NAV_LIST_BTN
let NAV_LIST_BTN_BAR
let ALL_NAV_ITEMS
let NAV_ICON
let DELAY_TIME

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	BODY = document.querySelector('body')
	NAV = document.querySelector('.nav')
	NAV_LIST = document.querySelector('.nav__list')
	NAV_LIST_BTN = document.querySelector('.burger-btn')
	NAV_LIST_BTN_BAR = document.querySelector('.burger-btn__bars')
	ALL_NAV_ITEMS = document.querySelectorAll('.nav__item')
	NAV_ICON = document.querySelector('.nav__icon')
	DELAY_TIME = 1
}

const prepareDOMEvents = () => {
	window.addEventListener('scroll', addShadow)
	NAV_ICON.addEventListener('click', moveToTheTop)
	NAV_LIST_BTN.addEventListener('click', handleNav)
}

const handleNav = () => {
	NAV_LIST.classList.toggle('nav__list--active')
	BODY.classList.remove('scroll-block')
	NAV_LIST_BTN_BAR.classList.toggle('burger-btn__bars--active')

	ALL_NAV_ITEMS.forEach(item => {
		item.addEventListener('click', () => {
			NAV_LIST.classList.remove('nav__list--active')
			BODY.classList.remove('scroll-block')
			NAV_LIST_BTN_BAR.classList.remove('burger-btn__bars--active')
		})
	})

	mobileBlock()
}

const mobileBlock = () => {
	if (NAV_LIST.classList.contains('nav__list--active')) {
		if (BODY.classList.contains('scroll-block')) {
			BODY.classList.remove('scroll-block')
		} else {
			BODY.classList.add('scroll-block')
		}
	}
}

const addShadow = () => {
	if (window.scrollY > 50) {
		NAV.classList.add('nav-bg')
	} else {
		NAV.classList.remove('nav-bg')
	}
}

const moveToTheTop = () => {
	window.scrollTo(0, 0)
}

const navHeight = document.querySelector('.nav').offsetHeight
document.documentElement.style.setProperty('--scroll-padding', navHeight - 1 + 'px')

document.addEventListener('DOMContentLoaded', main)
