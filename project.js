"use strict";
// Нахождение элементов
const nameUser = document.querySelector('.input__name');
const vacancyUser = document.querySelector('.input__vacancy');
const numberUser = document.querySelector('.input__number');
const addUser = document.querySelector('.button__add');
const clearListUser = document.querySelector('.button__clear-list');
const searchUser = document.querySelector('.button__search');
// tasks делается под localStorage
// let tasks = []
if (nameUser && vacancyUser && numberUser) {
    addUser?.addEventListener('click', addTask);
} //else {
//	showError()
//}
// Функция добавления задачи
function addTask(event) {
    event.preventDefault();
    // Грамотный ввод данных
    let name = nameUser.value.trim();
    let vacancy = vacancyUser.value.trim();
    let numberP = numberUser.value.trim();
    const firstIndexName = name[0].toUpperCase();
    const firstIndexVacancy = vacancy[0].toUpperCase();
    const correctName = firstIndexName + name.slice(1).toLowerCase();
    const correctVacancy = firstIndexVacancy + vacancy.slice(1).toLowerCase();
    let correctNumber = '';
    let allInfoAboutUser = {
        Name: '',
        Vacancy: '',
        Phone: '',
    };
    if (numberP[0] === '+') {
        correctNumber = numberP;
    }
    else {
        correctNumber = '+' + numberP;
    }
    if (correctName.length < 31 &&
        correctVacancy.length < 31 &&
        correctNumber.length === 12) {
        allInfoAboutUser.Name = correctName;
        allInfoAboutUser.Vacancy = correctVacancy;
        allInfoAboutUser.Phone = correctNumber;
    }
    else {
        console.log('Ошибка при вводе данных!');
    }
    console.log(allInfoAboutUser);
    // if (numberP[0] == '+') {
    // 	correctNumber = numberP
    // } else {
    // 	correctNumber = `'+'${numberP}`
    // }
    // if (correctNumber.length === 12) {
    // allInfoAboutUser.Phone = correctNumber
    // }
    // 	if (correctName.length < 21) {
    // allInfoAboutUser.Name = correctName
    // }
    // if (correctVacancy.length < 50) {
    // allInfoAboutUser.Vacancy = correctVacancy
    // }
    // console.log(allInfoAboutUser)
    //Работа с данными
}
// if (nameUser && vacancyUser && numberUser) {
// 	clearListUser?.addEventListener('click', clearTask)
// }
// function clearTask(event: Event) {
// 	event.preventDefault()
// }
function showError() {
    const mainError = document.createElement('div');
    mainError.className = 'main-error';
    const navMenu = document.querySelector('.nav');
    navMenu?.after(mainError);
    const secondError = document.createElement('div');
    secondError.className = 'second_error';
    secondError.textContent = 'Error';
    mainError?.appendChild(secondError);
}
