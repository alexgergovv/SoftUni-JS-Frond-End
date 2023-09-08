function ReverseArray(num, array){
    let reversedArray=[];
    for (let index = num-1; index >=0; index--) {
        reversedArray.push(array[index]);
    }
    console.log(reversedArray.join(' '));
}