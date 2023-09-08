function sumTwoNumbers(num1, num2, num3){
    function sum(x, y){
        return x + y;
    }
    let sumNumbers = sum(num1, num2);
    function subtract(x, y){
        return x - y;
    }
    console.log(subtract(sumNumbers, num3));
}