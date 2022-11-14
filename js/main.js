const body = document.querySelector('body')
const nav = document.querySelector('.nav__box')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__box-item')

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

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const deleteAnimation = () => {
    allNavItems.forEach(item => {
        item.classList.remove('nav-items-animation')
    })
}

const scrollBlockNavBtn = () => {
    if(body.classList.contains('scroll-block')) {
        body.classList.remove('scroll-block')
    } else {
        body.classList.add('scroll-block')
    }
}

navBtn.addEventListener('click', handleNav)
