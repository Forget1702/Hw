let userName = prompt('Введите ваше имя:');
let userYearOfBirth = +prompt('Введите ваш год рождения:');
if (!isNaN(userYearOfBirth)) {
    alert(`${userName}:${2024-userYearOfBirth}`);
}
else {
    alert(`Год должен быть числом!`);
}
