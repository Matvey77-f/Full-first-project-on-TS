// Нахождение элементов
const nameUser = document.querySelector('.input__name') as HTMLInputElement
const vacancyUser = document.querySelector(
	'.input__vacancy'
) as HTMLInputElement
const numberUser = document.querySelector('.input__number') as HTMLInputElement

const addUser = document.querySelector('.button__add')
const clearListUser = document.querySelector('.button__clear-list')
const searchUser = document.querySelector('.button__search')

// tasks делается под localStorage
// let tasks = []

if (nameUser && vacancyUser && numberUser) {
	addUser?.addEventListener('click', addTask)
} //else {
// 	showError()
// }

// Функция добавления задачи
function addTask(event: Event) {
	event.preventDefault()

	// Грамотный ввод данных
	let name = nameUser.value.trim()
	let vacancy = vacancyUser.value.trim()
	let numberP = numberUser.value.trim()

	const firstLetterName = name[0].toUpperCase()
	const firstLetterVacancy = vacancy[0].toUpperCase()

	const correctName = firstLetterName + name.slice(1).toLowerCase()
	const correctVacancy = firstLetterVacancy + vacancy.slice(1).toLowerCase()
	let correctNumber = ''

	let allInfoAboutUser: { Name: string; Vacancy: string; Phone: string } = {
		Name: '',
		Vacancy: '',
		Phone: '',
	}

	if (numberP[0] == '+') {
		correctNumber = numberP
	} else {
		correctNumber = `+${numberP}`
	}

	if (correctNumber.length === 12) {
		allInfoAboutUser.Phone = correctNumber
		//} else {
		// showError()
	}

	if (correctName.length < 21) {
		allInfoAboutUser.Name = correctName
	} else {
		// showError()
	}

	if (correctVacancy.length < 21) {
		allInfoAboutUser.Vacancy = correctVacancy
	} else {
		// showError()
	}

	console.log(allInfoAboutUser)

	//Работа с данными
}

// if (nameUser && vacancyUser && numberUser) {
// 	clearListUser?.addEventListener('click', clearTask)
// }

// function clearTask(event: Event) {
// 	event.preventDefault()
// }

function showError() {
	const mainError = document.createElement('div')
	mainError.className = 'main-error'

	const navMenu = document.querySelector('.nav')
	navMenu?.after(mainError)

	const secondError = document.createElement('div')
	secondError.className = 'second_error'
	secondError.textContent = 'Error'
	mainError?.appendChild(secondError)
}

clearListUser?.addEventListener('click', showError)
