
let someStr = '';

for (let i = 1; i <= 8; i++) {
    for (let j = 1; j <= 8; j++) {
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                someStr = someStr + '  ';
            } else {
                someStr = someStr + '██';
            }
        } else {
            if (j % 2 === 0) {
                someStr = someStr + '██';
            } else {
                someStr = someStr + '  ';
            }
        }
    }
    someStr += '\n';
}

console.log(someStr);
