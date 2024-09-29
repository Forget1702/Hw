let userName = prompt('Введите ваше имя:');
let userYearOfBirth = +prompt('Введите ваш год рождения:');
let age = 2024-userYearOfBirth;
if (!isNaN(userYearOfBirth) && userYearOfBirth != '' ) {
    if (age % 10 === 1) {
        alert(`${userName}:${age} год`);
    }
    else if (age % 10 > 1 && age % 10 < 5) {
        alert(`${userName}:${age} года`);
    }
    else if (age % 10 > 5 || age % 10 === 0) {
        alert(`${userName}:${age} лет`);
    }
}
else {
    alert(`Год не число или пустое имя.`);
}