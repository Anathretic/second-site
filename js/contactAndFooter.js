const footerYear = document.querySelector('.footer__year')
const contactUsername = document.querySelector('#name')
const contactUserEmail = document.querySelector('#email')
const contactUserMsg = document.querySelector('#msg')
const contactBtn = document.querySelector('.contact__form-btn')
const contactHeading = document.querySelector('.contact h2')
const emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i

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

const currentYear = () => {
	const date = new Date().getFullYear()
	footerYear.innerText = date
}

currentYear()

contactBtn.addEventListener('click', e => {
	e.preventDefault()
	msgBtnAction()
})