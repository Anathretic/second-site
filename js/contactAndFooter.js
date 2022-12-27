const footerYear = document.querySelector('.footer__year')
const contactUsername = document.querySelector('#name')
const contactUserEmail = document.querySelector('#email')
const contactUserMsg = document.querySelector('#msg')
const contactBtn = document.querySelector('.contact__form-btn')
const emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i

const inputsArr = [contactUsername, contactUserEmail, contactUserMsg]

const msgBtnAction = () => {
	if (contactUsername.value !== '' && contactUserMsg.value !== '' && emailCheck.test(contactUserEmail.value)) {
		contactBtn.textContent = 'SENT!'
		inputsArr.forEach(el => {
			el.value = ''
		})
	} else {
		contactBtn.textContent = 'Check the form..'
	}

	setTimeout(() => {
		contactBtn.textContent = 'Send it!'
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
