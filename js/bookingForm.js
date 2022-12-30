const inputName = document.querySelector('#book-name')
const inputLastName = document.querySelector('#book-last-name')
const inputPhoneNumber = document.querySelector('#book-phone-number')
const inputEmail = document.querySelector('#book-email')
const inputIsland = document.querySelector('#book-island')
const inputCompany = document.querySelector('#book-company')
const bookFormBtn = document.querySelector('.book__box-form-btn')
const numberMinValue = 9
const numberCheck = /[0-9]/
const emailBookCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i

const checkInput = () => {
    if(inputName.value !== '' && inputLastName.value !== '' && numberCheck.test(inputPhoneNumber.value) && inputPhoneNumber.value.length >= numberMinValue && emailBookCheck.test(inputEmail.value) && inputIsland.value !== '0' && inputCompany.value !== '0') {
        alert(`Sent! You will be redirected! Check your e-mail!`)
        goHome()
    } else {
        bookFormBtn.textContent = 'Something is wrong.. Check the form!'
        setTimeout(() => {
            bookFormBtn.textContent = 'Book it!'
        }, 2500)
    }
}

const goHome = () => {
    window.location.href = '../index.html'
}

bookFormBtn.addEventListener('click', e => {
    e.preventDefault()
    checkInput()
})
