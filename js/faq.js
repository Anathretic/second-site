let FAQ_INPUT
let FAQ_INPUT_LIST
let FAQ_INPUT_LIST_LI

const faqMain = () => {
	faqPrepareDOMElements()
	faqPrepareDOMEvents()
}

const faqPrepareDOMElements = () => {
	FAQ_INPUT = document.querySelector('.content__faq-input')
	FAQ_INPUT_LIST = document.querySelector('.content__faq-list-menu')
	FAQ_INPUT_LIST_LI = document.querySelectorAll('.content__faq-list-menu li')
}

const faqPrepareDOMEvents = () => {
    FAQ_INPUT.addEventListener('keyup', questionFilter)
}

const questionFilter = () => {
	FAQ_INPUT_LIST_LI.forEach(el => {
		const match = new RegExp(FAQ_INPUT.value, 'i').test(el.textContent)
		if (!match) {
			el.style.display = 'none'
		} else {
			el.style.display = 'block'
			FAQ_INPUT_LIST.style.display = 'block'
		}
	})

	if (FAQ_INPUT.value === '') {
		FAQ_INPUT_LIST.style.display = 'none'
	}
}

const clearInput = () => {
	FAQ_INPUT.value = ''
	FAQ_INPUT_LIST.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', faqMain)
