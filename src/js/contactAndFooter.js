let FOOTER_YEAR
let CONTACT_USERNAME
let CONTACT_USER_EMAIL
let CONTACT_USER_MSG
let CONTACT_BTN
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
	EMAIL_CHECK = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i
	INPUTS_ARR = [CONTACT_USERNAME, CONTACT_USER_EMAIL, CONTACT_USER_MSG]
}

const conFooPrepareDOMEvents = () => {
	currentYear()
	CONTACT_BTN.addEventListener('click', e => {
		e.preventDefault()
		msgBtnAction()
	})
}

const msgBtnAction = () => {
	if (CONTACT_USERNAME.value !== '' && CONTACT_USER_MSG.value !== '' && EMAIL_CHECK.test(CONTACT_USER_EMAIL.value)) {
		CONTACT_BTN.textContent = 'wysłane!'
		INPUTS_ARR.forEach(el => {
			el.value = ''
		})
	} else {
		CONTACT_BTN.textContent = 'sprawdź formularz...'
	}

	setTimeout(() => {
		CONTACT_BTN.textContent = 'wyślij'
	}, 2500)
}

const currentYear = () => {
	const date = new Date().getFullYear()
	FOOTER_YEAR.innerText = date
}

document.addEventListener('DOMContentLoaded', contactAndFooterMain)