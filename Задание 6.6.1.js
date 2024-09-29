let str = 'Довод';
let transformStr = str.toLowerCase();
let testStr = '';
for (let i = 0; i < transformStr.length; i++) {
    for (let j = transformStr.length; 0 < j; j--) {
        if (transformStr[i] === transformStr[j]) {
            testStr += transformStr[i];
            break;
        }
    }
}
if (testStr === transformStr) {
    console.log(`Слово ${str} является палиндромом`);
}
else {
    console.log(`Слово ${str} не является палиндромом`);
}