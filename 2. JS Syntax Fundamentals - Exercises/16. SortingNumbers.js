function SortNumbers(array){
    let newArray = [];
    let i = 0;
    array = array.sort((a, b) => (a-b));
    while(array.length>0){
        newArray[i] = array.shift();
        i++;
        newArray[i] = array.pop();
        i++;
    }
    return newArray;
}