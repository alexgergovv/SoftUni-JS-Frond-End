function OrderAlphabetically(array){
    let newArray = array.sort();

    for (let i = 0; i < newArray.length; i++) {
       console.log(`${i+1}.${newArray[i]}`);
       
    }
}