function checkIfMultiplicationResultIsPositiveOrNegative(num1, num2, num3){
    let count = 0;
    if(num1<0){
        count++;
    }
    if(num2<0){
        count++;
    }
    if(num3<0){
        count++;
    }

    if(count%2==1){
        console.log("Negative");
    }
    else{
        console.log("Positive")
    }
}