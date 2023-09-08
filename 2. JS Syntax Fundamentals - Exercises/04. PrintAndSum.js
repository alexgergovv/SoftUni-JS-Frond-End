function PrintNumbers(start, end){
    let array = [];
    let sum = 0;
    let i = 0;
    for (let index = start; index <= end; index++) {
       array[i] = index;
       sum += index;
       i++;
    }
    console.log(array.join(' '));
    console.log(`Sum: ${sum}`)
}