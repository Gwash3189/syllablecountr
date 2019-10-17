import syllable from 'syllable'

const setUpNewTemplate = (template) => {
	const appArea = document.getElementById('app')
	const newArea = template.content.cloneNode(true)
	const counterDiv = newArea.querySelector('[data-count]')
	assignEventHandlers(newArea, counterDiv)
	appArea.append(newArea) 
}

const assignEventHandlers = (newArea, countDiv) => {
	newArea.querySelector('input').onkeyup = (event) => {
		countDiv.innerText = `Count: ${syllable(event.target.value)}`
	}
}

const newRowHandler = () => {
	setUpNewTemplate(document.querySelector('template'))
}

(() => {
	document.querySelector('button').onclick = newRowHandler
	setUpNewTemplate(document.querySelector('template'))
})()
