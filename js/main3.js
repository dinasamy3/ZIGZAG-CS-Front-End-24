

function checkFirstDigit(X) {
    const firstDigit = parseInt(X.toString()[0]);
    if (firstDigit % 2 === 0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
}


checkFirstDigit(4569); 
checkFirstDigit(3569); 
