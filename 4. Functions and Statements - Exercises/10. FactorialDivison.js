function DivideFactorial(number1, number2){
    let result1 = 1;
    let result2 = 1;
    for (let i = 2; i <= number1; i++) {
       result1 *=i; 
    }
    for (let i = 2; i <= number2; i++) {
       result2*=i;
    }
    console.log((result1/result2).toFixed(2));
}
DivideFactorial(6, 3)