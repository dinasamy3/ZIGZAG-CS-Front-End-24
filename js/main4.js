

function findMinMax(A, B, C) {
    const min = Math.min(A, B, C);
    const max = Math.max(A, B, C);
    console.log(`${min} ${max}`);
}

findMinMax(1, 2, 3);    
findMinMax(-1, -2, -3); 
findMinMax(10, 20, -5); 
