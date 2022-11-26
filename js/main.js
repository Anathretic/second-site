const body = document.querySelector('body')
const nav = document.querySelector('.nav__box')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__box-item')
const footerYear = document.querySelector('.footer__year')
const contactUsername = document.querySelector('#name')
const contactUserEmail = document.querySelector('#email')
const contactUserMsg = document.querySelector('#msg')
const contactBtn = document.querySelector('.contact__form-btn')
const contactHeading = document.querySelector('.contact h2')
const emailCheck = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i


const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const scrollBlockNavBtn = () => {
    if(body.classList.contains('scroll-block')) {
        body.classList.remove('scroll-block')
    } else {
        body.classList.add('scroll-block')
    }
}

const handleNav = () => {
    nav.classList.toggle('nav__box--active')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav__box--active')
            body.classList.remove('scroll-block')
        })
    })

    handleNavItemsAnimation()
    scrollBlockNavBtn()
}

const msgBtnAction = () => {
    if(contactUsername.value !== '' && contactUserMsg.value !== '' && emailCheck.test(contactUserEmail.value)) {
        contactHeading.textContent = 'sent!',
        contactUsername.value = ''
        contactUserEmail.value = ''
        contactUserMsg.value = ''

    } else {
        contactHeading.textContent = 'check the form..'
    }

    setTimeout(() => {
        contactHeading.textContent = 'contact us!'
    }, 2500)
}

const deleteAnimation = () => {
    allNavItems.forEach(item => {
        item.classList.remove('nav-items-animation')
    })
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
navBtn.addEventListener('click', handleNav)
