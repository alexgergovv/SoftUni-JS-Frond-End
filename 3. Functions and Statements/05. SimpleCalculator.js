function calculateResult(num1, num2, operator){
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;
    let add= (x, y) => x + y;
    let subtract = (x, y) => x - y;

    if (operator === "multiply") {
        console.log(multiply(num1, num2));
    }
    else if(operator === "divide"){
        console.log(divide(num1, num2));
    }
    else if(operator === "add"){
        console.log(add(num1, num2));
    }
    else{
        console.log(subtract(num1, num2));
    }
}