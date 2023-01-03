const faqInput = document.querySelector('.content__faq-input')
const faqInputList = document.querySelector('.content__faq-list-menu')
const allListElements = document.querySelectorAll('li')

const questionFilter = () => {
    allListElements.forEach(el => {
        const match = new RegExp(faqInput.value, 'i').test(el.textContent)
        if(!match) {
            el.style.display = 'none'
        } else {
            el.style.display = 'block'
            faqInputList.style.display = 'block'
        }
    })

    if(faqInput.value === '') {
        faqInputList.style.display = 'none'
    }
}

faqInput.addEventListener('keyup', questionFilter)