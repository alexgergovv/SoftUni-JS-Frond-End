function printElementBetweenCharacters(char1, char2){
    let firstNum = char1.charCodeAt(0);
    let secondNum = char2.charCodeAt(0);
    let array = [];
    if (firstNum >secondNum) {
        let temporary = firstNum;
        firstNum = secondNum;
        secondNum = temporary;
    }
    for (let index = firstNum+1; index < secondNum; index++) {
       array.push(String.fromCharCode(index));
    }
    console.log(array.join(' '));
}