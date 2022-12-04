const inputName = document.querySelector('#book-name')
const inputLastName = document.querySelector('#book-last-name')
const inputPhoneNumber = document.querySelector('#book-phone-number')
const inputEmail = document.querySelector('#book-email')
const inputIsland = document.querySelector('#book-island')
const inputCompany = document.querySelector('#book-company')
const bookBtn = document.querySelector('.book__box-form-btn')
const numberCheck = /[0-9]/
const emailBookCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i

const checkInput = () => {
    if(inputName.value !== '' && inputLastName.value !== '' && numberCheck.test(inputPhoneNumber.value) && emailBookCheck.test(inputEmail.value) && inputIsland.value !== 0 && inputCompany.value !== 0) {
        bookBtn.textContent = 'Booked! Check your e-mail!'
        inputName.value = ''
        inputLastName.value = ''
        inputPhoneNumber.value = ''
        inputEmail.value = ''
        inputIsland.value = 0
        inputCompany.value = 0
    } else {
        bookBtn.textContent = 'Something is wrong.. Check the form!'
    }

    setTimeout(() => {
		bookBtn.textContent = 'Book it!'
	}, 3000)
}

bookBtn.addEventListener('click', e => {
    e.preventDefault()
    checkInput()
})
