const body = document.querySelector('body')
const mobileNav = document.querySelector('.nav__mobile-box')
const mobileNavBtn = document.querySelector('.burger-btn')
const mobileAllNavItems = document.querySelectorAll('.nav__mobile-box-item')
const navIcon = document.querySelector('.nav__icon')

const mobileBlock = () => {
	if (mobileNav.classList.contains('nav__mobile-box--active')) {
		if (body.classList.contains('scroll-block')) {
			body.classList.remove('scroll-block')
		} else {
			body.classList.add('scroll-block')
		}
	}
}

const handleMobileNavItemsAnimation = () => {
	let delayTime = 0

	mobileAllNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleMobileNav = () => {
	mobileNav.classList.toggle('nav__mobile-box--active')
	body.classList.remove('scroll-block')

	mobileAllNavItems.forEach(item => {
		item.addEventListener('click', () => {
			mobileNav.classList.remove('nav__mobile-box--active')
			body.classList.remove('scroll-block')
		})
	})

	handleMobileNavItemsAnimation()
	mobileBlock()
}

const deleteMobileAnimation = () => {
	mobileAllNavItems.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

navIcon.addEventListener('click', () => {
	mobileNav.classList.remove('nav__mobile-box--active')
})
mobileNavBtn.addEventListener('click', handleMobileNav)
