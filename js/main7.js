

function printLuckyNumbers(A, B) {
    let found = false;
    for (let i = A; i <= B; i++) {
        if (/^[47]+$/.test(i.toString())) {
            process.stdout.write(i + " ");
            found = true;
        }
    }
    if (!found) console.log(-1);
}


printLuckyNumbers(4, 20);
printLuckyNumbers(8, 15);