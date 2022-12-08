const body = document.querySelector('body')
const inputName = document.querySelector('#book-name')
const inputLastName = document.querySelector('#book-last-name')
const inputPhoneNumber = document.querySelector('#book-phone-number')
const inputEmail = document.querySelector('#book-email')
const inputIsland = document.querySelector('#book-island')
const inputCompany = document.querySelector('#book-company')
const bookPopup = document.querySelector('.book__box-form-popup')
const bookBtn = document.querySelector('.book__box-form-btn')
const bookPopupBtn = document.querySelector('.book__box-form-popup-btn')
const numberMinValue = 9
const numberCheck = /[0-9]/
const emailBookCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i

const inputsArray = [inputName, inputLastName, inputPhoneNumber, inputEmail]

const selectsArray = [inputIsland, inputCompany]

const checkInput = () => {
    if(inputName.value !== '' && inputLastName.value !== '' && numberCheck.test(inputPhoneNumber.value) && inputPhoneNumber.value.length >= numberMinValue && emailBookCheck.test(inputEmail.value) && inputIsland.value !== 0 && inputCompany.value !== 0) {
        bookPopup.classList.add('show-popup')
        body.classList.add('body-block')
        bookBtn.disabled = true
        bookBtn.classList.remove('btn-special-animation')
        bookBtn.style.cursor = 'default'
        inputsArray.forEach(el => {
            el.value = ''
            el.disabled = true
        })
        selectsArray.forEach(el => {
            el.value = 0
            el.disabled = true
        })
    } else {
        bookBtn.textContent = 'Something is wrong.. Check the form!'

        setTimeout(() => {
            bookBtn.textContent = 'Book it!'
        }, 3000)
    }
}

const goHome = () => {
    window.location.href = 'index.html'
}

bookBtn.addEventListener('click', e => {
    e.preventDefault()
    checkInput()
})

bookPopupBtn.addEventListener('click', e => {
    e.preventDefault()
    goHome()
})
