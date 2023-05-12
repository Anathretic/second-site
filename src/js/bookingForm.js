let INPUT_NAME
let INPUT_LAST_NAME
let INPUT_PHONE_NUMBER
let INPUT_EMAIL
let SELECT_ISLAND
let INPUT_AMOUNT
let BOOK_FORM_BTN
let POPUP
let POPUP_BTN
let INPUTS_ARRAY

const bookMain = () => {
	bookPrepareDOMElements()
	bookPrepareDOMEvents()
}

const bookPrepareDOMElements = () => {
	INPUT_NAME = document.querySelector('#book-name')
	INPUT_LAST_NAME = document.querySelector('#book-last-name')
	INPUT_PHONE_NUMBER = document.querySelector('#book-phone-number')
	INPUT_EMAIL = document.querySelector('#book-email')
	SELECT_ISLAND = document.querySelector('#book-island')
	INPUT_AMOUNT = document.querySelector('#book-amount')
	BOOK_FORM_BTN = document.querySelector('.book__box-btn')
	POPUP = document.querySelector('.popup')
	POPUP_BTN = document.querySelector('.popup__box-btn')
	INPUTS_ARRAY = [INPUT_NAME, INPUT_LAST_NAME, INPUT_PHONE_NUMBER, INPUT_EMAIL, INPUT_AMOUNT]
}

const bookPrepareDOMEvents = () => {
	BOOK_FORM_BTN.addEventListener('click', e => {
		e.preventDefault()

		checkForm(INPUTS_ARRAY)
		checkCharacters(INPUT_PHONE_NUMBER)
		checkNumber(INPUT_PHONE_NUMBER, 9)
		checkMail(INPUT_EMAIL)
		checkSelect(SELECT_ISLAND)
		checkAmount(INPUT_AMOUNT)
		checkErrors()
	})
}

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.book__box-error')
	formBox.classList.add('warning')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.book__box-error')
	formBox.classList.remove('warning')
	errorMsg.textContent = ''
}

const clearAll = () => {
	INPUTS_ARRAY.forEach(el => {
		el.value = ''
		el.classList.remove('warning')
	})
	SELECT_ISLAND.value = '0'
	SELECT_ISLAND.style.border = 'none'
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkNumber = (input, min) => {
	if (input.value.length < min) {
		showError(input, 'The number consists of 9 characters..')
	}
}

const checkCharacters = input => {
	const checkCharacters = new RegExp('^[0-9]*$')

	if (checkCharacters.test(input.value)) {
		clearError(input)
	} else {
		showError(input, 'You have to use only numbers!')
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'Enter your e-mail correctly..')
	}
}

const checkAmount = input => {
	if (input.value > 0) {
		clearError(input)
	} else {
		showError(input, 'Enter amount of people, please..')
	}
}

const checkSelect = select => {
	if (select.value !== '0') {
		clearError(select)
	} else {
		showError(select, 'Choose the island..')
	}
}

const checkErrors = () => {
	const body = document.querySelector('body')
	const allInputs = document.querySelectorAll('.book__box')
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains('warning')) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		clearAll()
		POPUP.style.display = 'block'
		body.classList.add('scroll-block')
	}
}

const goHome = () => {
	window.location.href = '/'
}

document.addEventListener('DOMContentLoaded', bookMain)
