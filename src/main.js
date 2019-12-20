import syllable from 'syllable'

let nextId = 1

const incrementId = () => nextId = nextId + 1
const assignId = (newArea) => newArea
	.querySelector('[data-id]')
	.setAttribute('data-id', nextId)

const setUpNewTemplate = (template) => {
	const appArea = document.getElementById('app')
	const newArea = template.content.cloneNode(true)
	const counterDiv = newArea.querySelector('[data-count]')

	assignId(newArea)
	assignEventHandlers(newArea, counterDiv, nextId)
	appArea.append(newArea) 
	incrementId()
}

const assignEventHandlers = (newArea, countDiv, areaId) => {
	newArea.querySelector('input').onkeyup = (event) => {
		countDiv.innerText = `Count: ${syllable(event.target.value)}`
	}

	newArea.querySelector('button').onclick = () => {
		document.querySelector(`[data-id="${areaId}"]`).remove()
	}
}

const newRowHandler = () => {
	setUpNewTemplate(document.querySelector('template'))
}

(() => {
	document.querySelector('button').onclick = newRowHandler
	setUpNewTemplate(document.querySelector('template'))
})()
