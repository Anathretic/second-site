let BODY
let MOBILE_NAV
let MOBILE_NAV_BTN
let MOBILE_ALL_NAV_ITEMS
let NAV_ICON

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	BODY = document.querySelector('body')
	MOBILE_NAV = document.querySelector('.nav__mobile-box')
	MOBILE_NAV_BTN = document.querySelector('.burger-btn')
	MOBILE_ALL_NAV_ITEMS = document.querySelectorAll('.nav__mobile-box-item')
	NAV_ICON = document.querySelector('.nav__icon')
}

const prepareDOMEvents = () => {
	NAV_ICON.addEventListener('click', () => {
		MOBILE_NAV.classList.remove('nav__mobile-box--active')
	})
	MOBILE_NAV_BTN.addEventListener('click', handleMobileNav)
}

const mobileBlock = () => {
	if (MOBILE_NAV.classList.contains('nav__mobile-box--active')) {
		if (BODY.classList.contains('scroll-block')) {
			BODY.classList.remove('scroll-block')
		} else {
			BODY.classList.add('scroll-block')
		}
	}
}

const handleMobileNavItemsAnimation = () => {
	let delayTime = 0

	MOBILE_ALL_NAV_ITEMS.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleMobileNav = () => {
	MOBILE_NAV.classList.toggle('nav__mobile-box--active')
	BODY.classList.remove('scroll-block')

	MOBILE_ALL_NAV_ITEMS.forEach(item => {
		item.addEventListener('click', () => {
			MOBILE_NAV.classList.remove('nav__mobile-box--active')
			BODY.classList.remove('scroll-block')
		})
	})

	handleMobileNavItemsAnimation()
	mobileBlock()
}

const deleteMobileAnimation = () => {
	MOBILE_ALL_NAV_ITEMS.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

document.addEventListener('DOMContentLoaded', main)
