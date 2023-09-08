function RotateArray(array, count){
    let current=0;
    for (let index = 0; index < count; index++) {
       current = array.shift();
       array.push(current);
    }
    console.log(array.join(' '));
}