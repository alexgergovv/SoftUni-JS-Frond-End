function PrintNthElement(input, n){
    let array= [];
    let i = 0;
    for (let index = 0; index < input.length; index+=n) {
       array[i] = input[index];
       i++;
    }
    return array;
}