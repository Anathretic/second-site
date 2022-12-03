const body = document.querySelector('body')
const mobileNav = document.querySelector('.nav__mobile-box')
const mobileNavBtn = document.querySelector('.burger-btn')
const mobileAllNavItems = document.querySelectorAll('.nav__mobile-box-item')
const desktopNav = document.querySelector('.nav__desktop-box')
const desktopNavBtn = document.querySelector('.burger-btn-desktop')
const desktopAllNavItems = document.querySelectorAll('.nav__desktop-box-item')
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

const handleDesktopNavItemsAnimation = () => {
	let delayTime = 0

	desktopAllNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleDesktopNav = () => {
	desktopNav.classList.toggle('nav__desktop-box--active')

	desktopAllNavItems.forEach(item => {
		item.addEventListener('click', () => {
			desktopNav.classList.remove('nav__desktop-box--active')
		})
	})

	handleDesktopNavItemsAnimation()
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

const deleteDesktopAnimation = () => {
	desktopAllNavItems.forEach(item => {
		item.classList.remove('nav-items-animation')
	})
}

navIcon.addEventListener('click', () => {
	mobileNav.classList.remove('nav__mobile-box--active')
	desktopNav.classList.remove('nav__desktop-box--active')
})
mobileNavBtn.addEventListener('click', handleMobileNav)
desktopNavBtn.addEventListener('click', handleDesktopNav)
