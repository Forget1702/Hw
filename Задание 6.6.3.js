let num = +prompt('Введите число:');
let arr = [];
if (!isNaN(num)) {
    for (let i = 0; i <= num; i++) {
        arr[i] = i;
    }
    alert(arr);
}
else {
    alert('Вы ввели не число!')
}