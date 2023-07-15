let FOOTER_YEAR
let CONTACT_USERNAME
let CONTACT_USER_EMAIL
let CONTACT_USER_MSG
let CONTACT_BTN
let CONTACT_POPUP
let CONTACT_POPUP_BTN
let EMAIL_CHECK
let INPUTS_ARR

const contactAndFooterMain = () => {
	conFooPrepareDOMElements()
	conFooPrepareDOMEvents()
}

const conFooPrepareDOMElements = () => {
	FOOTER_YEAR = document.querySelector('.footer__year')
	CONTACT_USERNAME = document.querySelector('#name')
	CONTACT_USER_EMAIL = document.querySelector('#email')
	CONTACT_USER_MSG = document.querySelector('#msg')
	CONTACT_BTN = document.querySelector('.contact__form-btn')
	CONTACT_POPUP = document.querySelector('.contact__popup')
	CONTACT_POPUP_BTN = document.querySelector('.contact__popup-btn')
	INPUTS_ARR = [CONTACT_USERNAME, CONTACT_USER_EMAIL, CONTACT_USER_MSG]
}

const conFooPrepareDOMEvents = () => {
	currentYear()
	CONTACT_BTN.addEventListener('click', e => {
		e.preventDefault()

		checkContactForm(INPUTS_ARR)
		checkContactMail(CONTACT_USER_EMAIL)
		checkContactErrors()
	})
	CONTACT_POPUP_BTN.addEventListener('click', closeContactPopup)
}

const showError = input => {
	const formBox = input.parentElement
	formBox.classList.add('warning')
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('warning')
}

const clearAll = () => {
	INPUTS_ARR.forEach(el => {
		el.value = ''
		el.classList.remove('warning')
	})
}

const checkContactForm = input => {
	input.forEach(el => {
		if (el.value === '' || el.value.length < 3) {
			showError(el)
		} else {
			clearError(el)
		}
	})
}

const checkContactMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email)
	}
}

const checkContactErrors = () => {
	const allInputs = document.querySelectorAll('.contact__form-box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('warning')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		clearAll()
		CONTACT_POPUP.classList.add('contact-popup-active')

		setTimeout(() => {
			CONTACT_POPUP.classList.remove('contact-popup-active')
		}, 2000)
	}
}

const closeContactPopup = () => {
	CONTACT_POPUP.classList.remove('contact-popup-active')
}

const currentYear = () => {
	const date = new Date().getFullYear()
	FOOTER_YEAR.innerText = date
}

document.addEventListener('DOMContentLoaded', contactAndFooterMain)
