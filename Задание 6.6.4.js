let field = [[],[],[]];
let n = 3;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if ((i + j) % 2 === 0) {
            field[i][j] = 'x';
        }
        else {
            field[i][j] = 'o';
        }
    }
}
console.log(field);