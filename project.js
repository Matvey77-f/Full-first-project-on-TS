// Нахождение элементов
var nameUser = document.querySelector('.input__name');
var vacancyUser = document.querySelector('.input__vacancy');
var numberUser = document.querySelector('.input__number');
var addUser = document.querySelector('.button__add');
var clearListUser = document.querySelector('.button__clear-list');
var searchUser = document.querySelector('.button__search');
// tasks делается под localStorage
// let tasks = []
if (nameUser && vacancyUser && numberUser) {
    addUser === null || addUser === void 0 ? void 0 : addUser.addEventListener('click', addTask);
    // } else {
    // 	showError()
}
// Функция добавления задачи
function addTask(event) {
    event.preventDefault();
    // Грамотный ввод данных
    var name = nameUser.value.trim();
    var vacancy = vacancyUser.value.trim();
    var numberP = numberUser.value.trim();
    var firstLetterName = name[0].toUpperCase();
    var firstLetterVacancy = vacancy[0].toUpperCase();
    var correctName = firstLetterName + name.slice(1).toLowerCase();
    var correctVacancy = firstLetterVacancy + vacancy.slice(1).toLowerCase();
    var correctNumber = '';
    var allInfoAboutUser = {
        Name: '',
        Vacancy: '',
        Phone: '',
    };
    if (numberP[0] == '+') {
        correctNumber = numberP;
    }
    else {
        correctNumber = "+".concat(numberP);
    }
    if (correctNumber.length === 12) {
        allInfoAboutUser.Phone = correctNumber;
        //} else {
        // showError()
    }
    if (correctName.length < 21) {
        allInfoAboutUser.Name = correctName;
    }
    else {
        // showError()
    }
    if (correctVacancy.length < 21) {
        allInfoAboutUser.Vacancy = correctVacancy;
    }
    else {
        // showError()
    }
    console.log(allInfoAboutUser);
    //Работа с данными
}
// if (nameUser && vacancyUser && numberUser) {
// 	clearListUser?.addEventListener('click', clearTask)
// }
// function clearTask(event: Event) {
// 	event.preventDefault()
// }
// function showError(event: Event) {
// 	event.preventDefault()
// 	const callError = document.querySelector('.error-js')
// 	const mainLink = document.querySelector('.github-link')
// 	if (callError && mainLink) {
// 		mainLink.insertAdjacentElement('afterend', callError)
// 	} else {
// 		console.error('ERROR in code!')
// 	}
// }
// Вызов ошибки
// function showError(event: Event) {
// 	event.preventDefault()
// 	const mainError = document.querySelector('.error')
// }
