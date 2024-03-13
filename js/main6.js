

function printEvenNumbers(N) {
    let foundEvenNumber = false;
    for (let i = 2; i <= N; i += 2) {
        console.log(i);
        foundEvenNumber = true;
    }
    if (!foundEvenNumber) console.log(-1);
}


printEvenNumbers(10);
printEvenNumbers(5);
