const body = document.querySelector('body')
const nav = document.querySelector('.nav__box')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__box-item')
const footerYear = document.querySelector('.footer__year')
const userName = document.querySelector('#name')
const userEmail = document.querySelector('#email')
const userMsg = document.querySelector('#msg')
const contactBtn = document.querySelector('.contact__form-btn')
const contactHeading = document.querySelector('.contact h2')

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

const deleteAnimation = () => {
    allNavItems.forEach(item => {
        item.classList.remove('nav-items-animation')
    })
}

const msgBtnAction = () => {
    if(userName.value !== '' && userEmail.value !== '' && userMsg.value !== '') {
        contactHeading.textContent = 'sent!'
        userName.value = ''
        userEmail.value = ''
        userMsg.value = ''

    } else {
        contactHeading.textContent = 'Need more..'
    }

    setTimeout(() => {
        contactHeading.textContent = 'contact us!'
    }, 3000)
}

const currentYear = () => {
    const date = new Date().getFullYear()
    footerYear.innerText = date
}

currentYear()
contactBtn.addEventListener('click', msgBtnAction)
navBtn.addEventListener('click', handleNav)
