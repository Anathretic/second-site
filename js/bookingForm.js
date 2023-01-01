let INPUT_NAME
let INPUT_LAST_NAME
let INPUT_PHONE_NUMBER
let INPUT_EMAIL
let INPUT_ISLAND
let INPUT_COMPANY
let BOOK_FORM_BTN
let NUMBER_MIN_VALUE
let BOOK_NUMBER_CHECK
let BOOK_EMAIL_CHECK

const bookMain = () => {
	bookPrepareDOMElements()
	bookPrepareDOMEvents()
}

const bookPrepareDOMElements = () => {
	INPUT_NAME = document.querySelector('#book-name')
	INPUT_LAST_NAME = document.querySelector('#book-last-name')
	INPUT_PHONE_NUMBER = document.querySelector('#book-phone-number')
	INPUT_EMAIL = document.querySelector('#book-email')
	INPUT_ISLAND = document.querySelector('#book-island')
	INPUT_COMPANY = document.querySelector('#book-company')
	BOOK_FORM_BTN = document.querySelector('.book__box-form-btn')
	NUMBER_MIN_VALUE = 9
	BOOK_NUMBER_CHECK = /[0-9]/
	BOOK_EMAIL_CHECK = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i
}

const bookPrepareDOMEvents = () => {
    BOOK_FORM_BTN.addEventListener('click', e => {
        e.preventDefault()
        checkInput()
    })
}

const checkInput = () => {
	if (
		INPUT_NAME.value !== '' &&
		INPUT_LAST_NAME.value !== '' &&
		BOOK_NUMBER_CHECK.test(INPUT_PHONE_NUMBER.value) &&
		INPUT_PHONE_NUMBER.value.length >= NUMBER_MIN_VALUE &&
		BOOK_EMAIL_CHECK.test(INPUT_EMAIL.value) &&
		INPUT_ISLAND.value !== '0' &&
		INPUT_COMPANY.value !== '0'
	) {
		alert(`Sent! You will be redirected! Check your e-mail!`)
		goHome()
	} else {
		BOOK_FORM_BTN.textContent = 'Something is wrong.. Check the form!'
		setTimeout(() => {
			BOOK_FORM_BTN.textContent = 'Book it!'
		}, 2500)
	}
}

const goHome = () => {
	window.location.href = '../index.html'
}

document.addEventListener('DOMContentLoaded', bookMain)