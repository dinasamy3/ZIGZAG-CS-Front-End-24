

function checkExpression(expression) {
    const [A, S, B, _, C] = expression.split(' ');
    const result = eval(`${A} ${S} ${B}`);
    console.log(result == C ? "Yes" : result);
}


checkExpression("5 + 10 = 15"); 
checkExpression("3 - 1 = 2");    
checkExpression("2 * 10 = 19");  
