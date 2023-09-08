function printMatrix(number){
    let result = "";
    for (let i = 0; i < number; i++) {
       for (let k = 0; k < number; k++) {
       result += number + " ";
       }
       console.log(result);
       result = "";
    }
}